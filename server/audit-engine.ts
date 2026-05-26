import { storage } from "./storage";
import { RETIRED_MODELS } from "./audit-seed";
import type { ProductRegistry } from "@shared/schema";

/**
 * 8-phase audit protocol.
 * Phase 1: Baseline capture (from registry)
 * Phase 2: Source check (HEAD request — flag broken links)
 * Phase 3: Diff against last known (price + scraped content if present)
 * Phase 4: Severity classification (uses product.priority + retired-model upgrade to P0)
 * Phase 5: Issue creation (flag for human review)
 * Phase 6: Notification (stub — dashboard only)
 * Phase 7: Log write
 * Phase 8: Stale score calculation (age × severity weighting)
 */

// Severity-weighted stale score per task spec: stale ratio = ageDays / (freq × severityWeight)
// P0 weighted tightest (any drift = stale fast), P2 most lenient.
const SEV_WEIGHT: Record<string, number> = { P0: 0.7, P1: 1.0, P2: 1.3 };

function computeStaleScore(product: ProductRegistry): "fresh" | "aging" | "stale" | "rotten" {
  if (!product.lastAuditedAt) return "rotten";
  const ageDays = (Date.now() - new Date(product.lastAuditedAt).getTime()) / (1000 * 60 * 60 * 24);
  const freq = product.auditFrequencyDays || 7;
  const weight = SEV_WEIGHT[product.priority] ?? 1;
  const ratio = ageDays / (freq * weight);
  if (ratio < 0.5) return "fresh";
  if (ratio < 1) return "aging";
  if (ratio < 2) return "stale";
  return "rotten";
}

export function staleScoreFor(product: ProductRegistry): string {
  return computeStaleScore(product);
}

function scanRetiredModels(text: string): string[] {
  const hits: string[] = [];
  for (const m of RETIRED_MODELS) {
    const re = new RegExp(`\\b${m.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}\\b`, "i");
    if (re.test(text)) hits.push(m);
  }
  return hits;
}

// Walk every string value in a JSON tree so any baseline field (model, features,
// promo copy, etc.) gets scanned, not only the `model` key.
function collectStrings(node: unknown, out: string[] = []): string[] {
  if (typeof node === "string") out.push(node);
  else if (Array.isArray(node)) node.forEach((v) => collectStrings(v, out));
  else if (node && typeof node === "object") Object.values(node).forEach((v) => collectStrings(v, out));
  return out;
}

async function checkLink(url: string): Promise<boolean> {
  try {
    const r = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(5000), redirect: "follow" });
    if (r.ok) return true;
    // Some CDNs reject HEAD — fall back to GET with a tiny range
    const g = await fetch(url, { method: "GET", signal: AbortSignal.timeout(5000), headers: { Range: "bytes=0-0" } });
    return g.ok || g.status === 206;
  } catch {
    return false;
  }
}

export async function runAuditForProduct(productId: number): Promise<{ ok: boolean; issuesCreated: number; logsCreated: number }> {
  const product = await storage.getProductById(productId);
  if (!product) return { ok: false, issuesCreated: 0, logsCreated: 0 };

  let issuesCreated = 0;
  let logsCreated = 0;
  const primaryUrl = product.officialUrls?.[0] || null;
  const baseline = (product.baselineData as Record<string, unknown> | null) || {};

  // ===== PHASE 2: Source check (broken link detection) =====
  for (const url of product.officialUrls ?? []) {
    const ok = await checkLink(url);
    if (!ok) {
      await storage.createAuditIssue({
        productId,
        phase: 2,
        issueType: "broken_link",
        description: `Official source URL unreachable for ${product.name}: ${url}`,
        severity: product.priority,
        status: "open",
      });
      await storage.createAuditLogEntry({
        productId,
        phase: 2,
        field: "official_url",
        oldValue: url,
        newValue: "unreachable",
        sourceUrl: url,
        severity: product.priority,
        status: "flagged",
        notes: "HEAD/GET request failed",
      });
      issuesCreated++;
      logsCreated++;
    }
  }

  // ===== PHASE 3: Diff against last known =====
  // Price drift detection: compare baselinePriceUsd vs baseline.currentPriceUsd
  // (the latter is the "freshly observed" value — null if not yet scraped).
  const observedPrice = typeof baseline.currentPriceUsd === "number" ? (baseline.currentPriceUsd as number) : null;
  if (observedPrice !== null && product.baselinePriceUsd != null && observedPrice !== product.baselinePriceUsd) {
    // PHASE 4: classify — any price change is at least the product's priority
    await storage.createAuditIssue({
      productId,
      phase: 4,
      issueType: "price_change",
      description: `Price drift for ${product.name}: baseline $${product.baselinePriceUsd}/mo vs observed $${observedPrice}/mo. AITPBD BDT prices need recalculation.`,
      severity: product.priority,
      status: "open",
    });
    await storage.createAuditLogEntry({
      productId,
      phase: 3,
      field: "price_usd",
      oldValue: String(product.baselinePriceUsd),
      newValue: String(observedPrice),
      sourceUrl: primaryUrl,
      severity: product.priority,
      status: "flagged",
      notes: `Recalculate BDT pricing (delta ${observedPrice - product.baselinePriceUsd})`,
    });
    issuesCreated++;
    logsCreated++;
  }

  // ===== PHASE 5: Retired model watchlist — scan ALL baseline string content =====
  const allStrings = collectStrings(baseline).join(" | ");
  if (allStrings) {
    const retiredHits = Array.from(new Set(scanRetiredModels(allStrings)));
    for (const m of retiredHits) {
      await storage.createAuditIssue({
        productId,
        phase: 5,
        issueType: "retired_model",
        description: `Retired model "${m}" detected in baseline content for ${product.name}. Update to current model.`,
        severity: "P0",
        status: "open",
      });
      await storage.createAuditLogEntry({
        productId,
        phase: 5,
        field: "model",
        oldValue: m,
        newValue: null,
        sourceUrl: primaryUrl,
        severity: "P0",
        status: "flagged",
        notes: "Retired model name found in baseline content scan",
      });
      issuesCreated++;
      logsCreated++;
    }
  }

  // ===== PHASE 7: Cycle log =====
  await storage.createAuditLogEntry({
    productId,
    phase: 7,
    field: "audit_cycle",
    oldValue: null,
    newValue: "completed",
    sourceUrl: primaryUrl,
    severity: product.priority,
    status: "ok",
    notes: `Audit cycle completed at ${new Date().toISOString()}`,
  });
  logsCreated++;

  // ===== PHASE 8: Stale score recompute =====
  const refreshed = await storage.getProductById(productId);
  const newScore = refreshed ? computeStaleScore({ ...refreshed, lastAuditedAt: new Date() } as ProductRegistry) : "fresh";
  await storage.updateProductLastAudited(productId, newScore);

  return { ok: true, issuesCreated, logsCreated };
}

export async function runAuditAll(): Promise<{ scanned: number; issuesCreated: number; logsCreated: number }> {
  const products = await storage.getProductRegistry();
  let scanned = 0;
  let issuesCreated = 0;
  let logsCreated = 0;
  for (const p of products) {
    const r = await runAuditForProduct(p.id);
    if (r.ok) scanned++;
    issuesCreated += r.issuesCreated;
    logsCreated += r.logsCreated;
  }
  return { scanned, issuesCreated, logsCreated };
}
