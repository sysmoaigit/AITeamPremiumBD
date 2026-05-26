/**
 * Comparison registry — canonical structured snapshot of every tool sold in
 * /tools/*. Each entry mirrors the pricing/specs surfaced on that tool's
 * detail page (which uses unstructured competitorRows/plans arrays of varying
 * shape). Centralising here keeps comparison output consistent and lets the
 * /compare/:slug page work for ANY two registered tools.
 *
 * When pricing on a tool page changes, update the matching entry here.
 */
import { Brain, Sparkles, Star, Image as ImageIcon, Video, Search, Code2, FileText, Edit3, Palette, Briefcase, Linkedin, Mic, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ComparisonSpec = { label: string; value: string; better?: boolean };

export interface CompareTool {
  slug: string;
  name: string;
  brand: string;
  toolPath: string;
  accent: string;
  icon: LucideIcon;
  tagline: string;
  priceFromBdt: number;
  priceFromLabel: string;
  category: "chat" | "image" | "video" | "writing" | "code" | "search";
  bestFor: string[];
  weaknesses: string[];
  specs: {
    model: string;
    contextWindow: string;
    multimodal: string;
    banglaQuality: string;
    bestUseCase: string;
    speed: string;
    accuracy: string;
    pricingTier: string;
  };
}

export const COMPARE_TOOLS: Record<string, CompareTool> = {
  chatgpt: {
    slug: "chatgpt",
    name: "ChatGPT Plus",
    brand: "OpenAI",
    toolPath: "/tools/chatgpt",
    accent: "#10A37F",
    icon: Sparkles,
    tagline: "The most popular AI assistant",
    priceFromBdt: 399,
    priceFromLabel: "৳399/mo",
    category: "chat",
    bestFor: [
      "General-purpose Q&A and brainstorming",
      "Image generation (DALL-E 3 included)",
      "Custom GPTs and the GPT Store",
      "Voice conversations (Advanced Voice Mode)",
      "Plugin & code-interpreter workflows",
    ],
    weaknesses: [
      "Shorter context window than Claude / Gemini",
      "Stricter content filters than Grok",
    ],
    specs: {
      model: "GPT-5 + o4-mini reasoning",
      contextWindow: "128K tokens",
      multimodal: "Text, image, voice, files",
      banglaQuality: "⭐⭐⭐⭐ (very good)",
      bestUseCase: "All-rounder for students, freelancers, business",
      speed: "Fast (sub-second first token)",
      accuracy: "⭐⭐⭐⭐⭐",
      pricingTier: "Mainstream",
    },
  },
  claude: {
    slug: "claude",
    name: "Claude Pro",
    brand: "Anthropic",
    toolPath: "/tools/claude",
    accent: "#D97757",
    icon: Brain,
    tagline: "Best AI for long-form writing & analysis",
    priceFromBdt: 599,
    priceFromLabel: "৳599/mo",
    category: "chat",
    bestFor: [
      "Long-form essays, thesis & academic writing",
      "Analysing huge PDFs / books (200K context)",
      "Nuanced reasoning with Extended Thinking",
      "Code review of large multi-file projects",
      "Professional tone, less 'AI-sounding' output",
    ],
    weaknesses: [
      "No native image generation",
      "Slightly stricter than ChatGPT on some topics",
    ],
    specs: {
      model: "Claude Sonnet 4.5 + Opus 4",
      contextWindow: "200K tokens (~150K words)",
      multimodal: "Text, image, PDF, spreadsheets",
      banglaQuality: "⭐⭐⭐⭐⭐",
      bestUseCase: "Writers, researchers, senior devs",
      speed: "Fast — Extended Thinking adds delay",
      accuracy: "⭐⭐⭐⭐⭐",
      pricingTier: "Premium",
    },
  },
  gemini: {
    slug: "gemini",
    name: "Google AI Pro",
    brand: "Google",
    toolPath: "/tools/google-ai-pro",
    accent: "#4285F4",
    icon: Star,
    tagline: "Gemini 3 + Google ecosystem",
    priceFromBdt: 449,
    priceFromLabel: "৳449/mo",
    category: "chat",
    bestFor: [
      "Largest context window in the industry (1M tokens)",
      "Real-time Google Search integration",
      "Veo 3 video generation included",
      "Gmail, Docs & Drive integration",
      "2 TB Google One storage bundled",
    ],
    weaknesses: [
      "Less polished writing voice than Claude",
      "Smaller plugin ecosystem than ChatGPT",
    ],
    specs: {
      model: "Gemini 3 Pro",
      contextWindow: "1,000,000 tokens",
      multimodal: "Text, image, video, voice, code",
      banglaQuality: "⭐⭐⭐⭐⭐",
      bestUseCase: "Heavy Google Workspace users, video creators",
      speed: "Very fast",
      accuracy: "⭐⭐⭐⭐",
      pricingTier: "Mainstream",
    },
  },
  perplexity: {
    slug: "perplexity",
    name: "Perplexity Pro",
    brand: "Perplexity",
    toolPath: "/tools/perplexity",
    accent: "#20B8CD",
    icon: Search,
    tagline: "AI search engine with sources",
    priceFromBdt: 549,
    priceFromLabel: "৳549/mo",
    category: "search",
    bestFor: [
      "Research with cited sources",
      "Real-time web + academic search",
      "Picking which AI model answers (GPT-5, Claude, Gemini)",
      "Quick factual lookups, not creative work",
    ],
    weaknesses: [
      "Not designed for long creative writing",
      "Limited image / video generation",
    ],
    specs: {
      model: "GPT-5, Claude Sonnet 4.5, Gemini 3 (you pick)",
      contextWindow: "Varies by chosen model",
      multimodal: "Text, image upload, file upload",
      banglaQuality: "⭐⭐⭐⭐",
      bestUseCase: "Researchers, students, journalists",
      speed: "Very fast — search-first design",
      accuracy: "⭐⭐⭐⭐⭐ (cited sources)",
      pricingTier: "Mainstream",
    },
  },
  grok: {
    slug: "grok",
    name: "SuperGrok",
    brand: "xAI",
    toolPath: "/tools/supergrok",
    accent: "#1DA1F2",
    icon: Sparkles,
    tagline: "Grok 4 — uncensored & X-native",
    priceFromBdt: 999,
    priceFromLabel: "৳999/mo",
    category: "chat",
    bestFor: [
      "Less restrictive answers on edgy topics",
      "Real-time X (Twitter) data and trends",
      "Grok 4 Heavy multi-agent reasoning",
      "DeepSearch live web research",
    ],
    weaknesses: [
      "Most expensive of the chat AIs",
      "Smaller ecosystem of apps & plugins",
    ],
    specs: {
      model: "Grok 4 + Grok 4 Heavy",
      contextWindow: "256K tokens",
      multimodal: "Text, image, voice",
      banglaQuality: "⭐⭐⭐",
      bestUseCase: "Power users wanting fewer guardrails",
      speed: "Fast",
      accuracy: "⭐⭐⭐⭐",
      pricingTier: "Premium",
    },
  },
  midjourney: {
    slug: "midjourney",
    name: "Midjourney",
    brand: "Midjourney",
    toolPath: "/tools/midjourney",
    accent: "#7F5AF0",
    icon: ImageIcon,
    tagline: "Best AI image generator (artistic)",
    priceFromBdt: 999,
    priceFromLabel: "৳999/mo",
    category: "image",
    bestFor: [
      "Stylised, artistic images & concept art",
      "Marketing visuals with cinematic quality",
      "Character design, illustrations, posters",
      "Web interface + Discord workflow",
    ],
    weaknesses: [
      "Not as photorealistic as some competitors",
      "Less precise text-in-image than DALL-E / Ideogram",
    ],
    specs: {
      model: "Midjourney v7",
      contextWindow: "N/A (image gen)",
      multimodal: "Text-to-image, image-to-image",
      banglaQuality: "N/A",
      bestUseCase: "Designers, marketers, content creators",
      speed: "~30 sec per image",
      accuracy: "⭐⭐⭐⭐⭐ (artistic)",
      pricingTier: "Premium",
    },
  },
  leonardo: {
    slug: "leonardo",
    name: "Leonardo AI",
    brand: "Leonardo",
    toolPath: "/tools/leonardo",
    accent: "#FBBF24",
    icon: ImageIcon,
    tagline: "Game-asset & production-ready images",
    priceFromBdt: 699,
    priceFromLabel: "৳699/mo",
    category: "image",
    bestFor: [
      "Game assets, sprites, environment art",
      "Photorealistic Flux + Phoenix models",
      "Fine control with custom-trained models",
      "Cheaper than Midjourney for high volume",
    ],
    weaknesses: [
      "Less iconic / cinematic than Midjourney by default",
      "Steeper learning curve for best results",
    ],
    specs: {
      model: "Flux + Phoenix + custom models",
      contextWindow: "N/A (image gen)",
      multimodal: "Text-to-image, image-to-image, canvas",
      banglaQuality: "N/A",
      bestUseCase: "Game devs, product designers, ad creators",
      speed: "~15 sec per image",
      accuracy: "⭐⭐⭐⭐ (photoreal)",
      pricingTier: "Mainstream",
    },
  },
  runway: {
    slug: "runway",
    name: "Runway ML",
    brand: "Runway",
    toolPath: "/tools/runway",
    accent: "#FF6B6B",
    icon: Video,
    tagline: "AI video — Gen-4 cinema quality",
    priceFromBdt: 1499,
    priceFromLabel: "৳1,499/mo",
    category: "video",
    bestFor: [
      "Text-to-video with cinematic motion",
      "Image-to-video (animate stills)",
      "Pro-grade timeline editor + green screen",
      "Hollywood-used motion brush controls",
    ],
    weaknesses: [
      "Limited free credits, paid plans add up",
      "Shorter clip lengths than Kling",
    ],
    specs: {
      model: "Gen-4 + Gen-4 Turbo",
      contextWindow: "N/A (video gen)",
      multimodal: "Text-to-video, image-to-video, video-to-video",
      banglaQuality: "N/A",
      bestUseCase: "Filmmakers, ad agencies, content studios",
      speed: "~60 sec per 5-sec clip",
      accuracy: "⭐⭐⭐⭐⭐",
      pricingTier: "Premium",
    },
  },
  kling: {
    slug: "kling",
    name: "Kling AI",
    brand: "Kuaishou",
    toolPath: "/tools/kling",
    accent: "#06B6D4",
    icon: Video,
    tagline: "Long-form AI video, China-native",
    priceFromBdt: 899,
    priceFromLabel: "৳899/mo",
    category: "video",
    bestFor: [
      "Longer clips (up to 2 min vs Runway's 10 sec)",
      "Realistic human motion & physics",
      "Cheaper credit costs than Runway",
      "Strong lip-sync for talking-head videos",
    ],
    weaknesses: [
      "UI primarily in Chinese (translated)",
      "Less established creative ecosystem",
    ],
    specs: {
      model: "Kling 2.5",
      contextWindow: "N/A (video gen)",
      multimodal: "Text-to-video, image-to-video, lip-sync",
      banglaQuality: "N/A",
      bestUseCase: "Long-form storytelling, social video, ads",
      speed: "~90 sec per 5-sec clip",
      accuracy: "⭐⭐⭐⭐",
      pricingTier: "Mainstream",
    },
  },
  copilot: {
    slug: "copilot",
    name: "GitHub Copilot Pro",
    brand: "GitHub",
    toolPath: "/tools/copilot",
    accent: "#171717",
    icon: Code2,
    tagline: "AI pair-programmer in your IDE",
    priceFromBdt: 599,
    priceFromLabel: "৳599/mo",
    category: "code",
    bestFor: [
      "Inline code completion in VS Code, JetBrains, Neovim",
      "Multi-model: GPT-5 + Claude Sonnet 4.5 + Gemini",
      "Chat with your repo (Copilot Workspace)",
      "Best for daily developer productivity",
    ],
    weaknesses: [
      "Not as good at standalone analysis as Claude",
      "Limited to coding context",
    ],
    specs: {
      model: "GPT-5 + Claude Sonnet 4.5 + Gemini 3",
      contextWindow: "Full-file + workspace context",
      multimodal: "Code, comments, chat",
      banglaQuality: "N/A",
      bestUseCase: "Developers, software engineers",
      speed: "Real-time completions",
      accuracy: "⭐⭐⭐⭐⭐",
      pricingTier: "Mainstream",
    },
  },
  grammarly: {
    slug: "grammarly",
    name: "Grammarly Premium",
    brand: "Grammarly",
    toolPath: "/tools/grammarly",
    accent: "#15C39A",
    icon: Edit3,
    tagline: "Writing assistant for grammar & tone",
    priceFromBdt: 449,
    priceFromLabel: "৳449/mo",
    category: "writing",
    bestFor: [
      "Real-time grammar, spelling, punctuation fixes",
      "Tone detection (formal vs friendly)",
      "Plagiarism checker built in",
      "Works everywhere — browser, Word, Gmail",
    ],
    weaknesses: [
      "English only — no Bangla support",
      "Not a generative AI, only assistive",
    ],
    specs: {
      model: "Grammarly AI + GPT integrations",
      contextWindow: "N/A (assistive)",
      multimodal: "Text only",
      banglaQuality: "❌ Not supported",
      bestUseCase: "Students, writers, ESL professionals",
      speed: "Real-time",
      accuracy: "⭐⭐⭐⭐⭐ (grammar)",
      pricingTier: "Affordable",
    },
  },
  canva: {
    slug: "canva",
    name: "Canva Pro",
    brand: "Canva",
    toolPath: "/tools/canva",
    accent: "#00C4CC",
    icon: Palette,
    tagline: "Drag-and-drop design with AI Magic Studio",
    priceFromBdt: 399,
    priceFromLabel: "৳399/mo",
    category: "image",
    bestFor: [
      "Social media graphics, presentations, posters",
      "Magic Write, Magic Edit, Magic Design AI tools",
      "100M+ premium templates, photos, elements",
      "Brand Kit + team collaboration",
      "Background remover and Magic Resize",
    ],
    weaknesses: [
      "Not a true generative image AI — template-first",
      "Less artistic control than Midjourney / Leonardo",
    ],
    specs: {
      model: "Canva Magic Studio (multi-model)",
      contextWindow: "N/A (design tool)",
      multimodal: "Text, image, video, templates",
      banglaQuality: "⭐⭐⭐⭐ (text in designs)",
      bestUseCase: "Marketers, students, small business owners",
      speed: "Real-time editor",
      accuracy: "⭐⭐⭐⭐",
      pricingTier: "Affordable",
    },
  },
  microsoft365: {
    slug: "microsoft365",
    name: "Microsoft 365 Copilot",
    brand: "Microsoft",
    toolPath: "/tools/microsoft365",
    accent: "#0078D4",
    icon: Briefcase,
    tagline: "Copilot inside Word, Excel, PowerPoint, Outlook",
    priceFromBdt: 1499,
    priceFromLabel: "৳1,499/mo",
    category: "writing",
    bestFor: [
      "Drafting documents in Word with Copilot",
      "Excel formulas, charts and data analysis",
      "Auto-generating PowerPoint slides from prompts",
      "Outlook email summaries and replies",
      "Teams meeting transcripts and recap",
    ],
    weaknesses: [
      "Locked to the Microsoft 365 ecosystem",
      "Expensive vs standalone chat AIs",
    ],
    specs: {
      model: "GPT-5 + Microsoft Graph",
      contextWindow: "Your M365 workspace",
      multimodal: "Text, spreadsheets, slides, email",
      banglaQuality: "⭐⭐⭐⭐",
      bestUseCase: "Office workers, analysts, managers",
      speed: "Fast (in-app)",
      accuracy: "⭐⭐⭐⭐",
      pricingTier: "Premium",
    },
  },
  linkedin: {
    slug: "linkedin",
    name: "LinkedIn Premium",
    brand: "LinkedIn",
    toolPath: "/tools/linkedin",
    accent: "#0A66C2",
    icon: Linkedin,
    tagline: "Career & business networking with AI",
    priceFromBdt: 899,
    priceFromLabel: "৳899/mo",
    category: "writing",
    bestFor: [
      "InMail messages to anyone on LinkedIn",
      "Who's Viewed Your Profile (last 90 days)",
      "AI-assisted profile + cover letter writing",
      "LinkedIn Learning (20,000+ courses)",
      "Top Applicant + salary insights",
    ],
    weaknesses: [
      "Not a general-purpose AI tool",
      "Value depends on active job search / sales",
    ],
    specs: {
      model: "LinkedIn AI (writing assist)",
      contextWindow: "Your profile + network",
      multimodal: "Text, profile data",
      banglaQuality: "⭐⭐⭐",
      bestUseCase: "Job seekers, recruiters, B2B sales",
      speed: "Real-time",
      accuracy: "⭐⭐⭐⭐",
      pricingTier: "Mainstream",
    },
  },
  elevenlabs: {
    slug: "elevenlabs",
    name: "ElevenLabs",
    brand: "ElevenLabs",
    toolPath: "/tools/elevenlabs",
    accent: "#F5A623",
    icon: Mic,
    tagline: "Most realistic AI voice generator",
    priceFromBdt: 999,
    priceFromLabel: "৳999/mo",
    category: "video",
    bestFor: [
      "Ultra-realistic text-to-speech in 30+ languages",
      "Voice cloning (your own or stock voices)",
      "Long-form audiobook & podcast generation",
      "AI dubbing across languages",
      "Sound effects generation",
    ],
    weaknesses: [
      "No native video — audio only",
      "Bangla voice quality lags English",
    ],
    specs: {
      model: "Eleven Multilingual v2 + Turbo",
      contextWindow: "N/A (audio gen)",
      multimodal: "Text-to-speech, voice clone, dubbing",
      banglaQuality: "⭐⭐⭐ (limited)",
      bestUseCase: "Podcasters, YouTubers, audiobook creators",
      speed: "Real-time streaming",
      accuracy: "⭐⭐⭐⭐⭐",
      pricingTier: "Premium",
    },
  },
  vault: {
    slug: "vault",
    name: "AI Tools Vault",
    brand: "AITPBD bundle",
    toolPath: "/tools/vault",
    accent: "#2563EB",
    icon: Layers,
    tagline: "10+ premium AI tools in one bundle",
    priceFromBdt: 1999,
    priceFromLabel: "৳1,999/mo",
    category: "chat",
    bestFor: [
      "Access to ChatGPT Plus, Claude, Gemini, Perplexity together",
      "Massive savings vs buying each separately",
      "Includes Midjourney, Grammarly, Canva and more",
      "Single bKash/Nagad payment",
      "Best for power users + small agencies",
    ],
    weaknesses: [
      "Shared seats only — not personal accounts",
      "Some tools rotate based on demand",
    ],
    specs: {
      model: "10+ AI tools combined",
      contextWindow: "Varies per tool",
      multimodal: "Text, image, code, design",
      banglaQuality: "⭐⭐⭐⭐⭐",
      bestUseCase: "Heavy AI users, freelancers, startups",
      speed: "Tool-dependent",
      accuracy: "⭐⭐⭐⭐⭐",
      pricingTier: "Bundle (best value)",
    },
  },
  notion: {
    slug: "notion",
    name: "Notion AI",
    brand: "Notion",
    toolPath: "/tools/notion",
    accent: "#000000",
    icon: FileText,
    tagline: "AI inside your knowledge base",
    priceFromBdt: 499,
    priceFromLabel: "৳499/mo",
    category: "writing",
    bestFor: [
      "Q&A across your entire Notion workspace",
      "Auto-summarise meeting notes & docs",
      "AI Connectors to Slack, Google Drive, GitHub",
      "Best for team knowledge workflows",
    ],
    weaknesses: [
      "Only useful if you already live in Notion",
      "Standalone writing weaker than ChatGPT / Claude",
    ],
    specs: {
      model: "GPT-5 + Claude Sonnet 4.5",
      contextWindow: "Your entire workspace",
      multimodal: "Text, file uploads",
      banglaQuality: "⭐⭐⭐⭐",
      bestUseCase: "Teams, knowledge workers, PMs",
      speed: "Fast",
      accuracy: "⭐⭐⭐⭐",
      pricingTier: "Affordable",
    },
  },
};

// Pairs we ship in the sitemap and recommend on the comparison hub.
type ToolSlug = keyof typeof COMPARE_TOOLS;
export const POPULAR_PAIRS: [ToolSlug, ToolSlug][] = [
  ["claude", "chatgpt"],
  ["gemini", "chatgpt"],
  ["claude", "gemini"],
  ["chatgpt", "perplexity"],
  ["grok", "chatgpt"],
  ["midjourney", "leonardo"],
  ["runway", "kling"],
  ["copilot", "chatgpt"],
  ["notion", "chatgpt"],
  ["grammarly", "chatgpt"],
  ["claude", "perplexity"],
  ["midjourney", "chatgpt"],
  ["canva", "midjourney"],
  ["elevenlabs", "runway"],
  ["microsoft365", "notion"],
  ["vault", "chatgpt"],
];

// Lightweight per-row winner heuristic. Returns which side has the
// objectively "better" value for that spec, when comparable.
type RowCmp = "higher" | "lower" | "none";
const ROW_COMPARISON: Record<string, RowCmp> = {
  "Starting price (BDT)": "lower",
  "Context window": "higher",
  "Bangla language quality": "higher",
  "Overall accuracy": "higher",
};

const numFromLabel = (s: string): number | null => {
  // strip non-digits but keep K/M suffixes; pick the largest number.
  const matches = s.match(/([\d,.]+)\s*([KMkm]?)/g);
  if (!matches) return null;
  let best = -Infinity;
  for (const m of matches) {
    const [, raw, suf] = m.match(/([\d,.]+)\s*([KMkm]?)/) ?? [];
    if (!raw) continue;
    let n = parseFloat(raw.replace(/,/g, ""));
    if (!isFinite(n)) continue;
    if (suf?.toLowerCase() === "k") n *= 1000;
    if (suf?.toLowerCase() === "m") n *= 1_000_000;
    if (n > best) best = n;
  }
  return best === -Infinity ? null : best;
};

const starCount = (s: string): number | null => {
  const m = s.match(/⭐/g);
  return m ? m.length : null;
};

export function rowWinner(label: string, a: string, b: string): "a" | "b" | null {
  const dir = ROW_COMPARISON[label];
  if (!dir) return null;
  // Prefer star comparison if both have stars.
  const aStars = starCount(a);
  const bStars = starCount(b);
  if (aStars != null && bStars != null) {
    if (aStars === bStars) return null;
    return aStars > bStars ? "a" : "b";
  }
  const aNum = numFromLabel(a);
  const bNum = numFromLabel(b);
  if (aNum == null || bNum == null) return null;
  if (aNum === bNum) return null;
  if (dir === "higher") return aNum > bNum ? "a" : "b";
  return aNum < bNum ? "a" : "b";
}

export function parseComparePair(slug: string): { a: CompareTool; b: CompareTool } | null {
  const m = slug.match(/^([a-z0-9-]+)-vs-([a-z0-9-]+)$/i);
  if (!m) return null;
  const a = COMPARE_TOOLS[m[1].toLowerCase()];
  const b = COMPARE_TOOLS[m[2].toLowerCase()];
  if (!a || !b || a.slug === b.slug) return null;
  return { a, b };
}

export type Recommendation =
  | { kind: "winner"; winnerSlug: string; reason: string }
  | { kind: "depends"; reason: string };

export function recommend(a: CompareTool, b: CompareTool): Recommendation {
  if (a.category !== b.category) {
    return {
      kind: "depends",
      reason: `${a.name} and ${b.name} solve different problems — ${a.name} is built for ${a.category}, while ${b.name} is built for ${b.category}. There's no single winner here: pick ${a.name} if you need ${a.bestFor[0].toLowerCase()}, and pick ${b.name} if you need ${b.bestFor[0].toLowerCase()}. Many AITPBD customers buy both.`,
    };
  }
  // Same category — recommend whichever has the better value (accuracy stars adjusted by price).
  const aScore = (a.specs.accuracy.match(/⭐/g)?.length ?? 0) - (a.priceFromBdt / 1000);
  const bScore = (b.specs.accuracy.match(/⭐/g)?.length ?? 0) - (b.priceFromBdt / 1000);
  const winner = aScore >= bScore ? a : b;
  const other = winner.slug === a.slug ? b : a;
  return {
    kind: "winner",
    winnerSlug: winner.slug,
    reason: `For most Bangladeshi users in the ${a.category} category, ${winner.name} (${winner.priceFromLabel}) is the stronger pick — it scores higher on accuracy and capability for the price. ${other.name} is still a solid choice if you specifically need ${other.bestFor[0].toLowerCase()}.`,
  };
}
