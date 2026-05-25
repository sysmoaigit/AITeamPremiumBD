import { Layout } from "@/components/layout/Layout";
import { BRAND, WhatsAppIcon } from "@/components/brand/LogoIcons";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Check, Clock, MessageCircle, ShieldCheck, Zap, CreditCard, Headphones, ChevronDown } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { config } from "@/lib/config";
import { BreadcrumbSchema, FAQSchema, ProductSchema } from "@/components/seo/JsonLd";
import { useState } from "react";

interface ToolPlan {
  label: string;
  price: string;
  period: string;
  delivery: string;
  type: string;
  specs: { label: string; value: string }[];
}

interface ToolDetailProps {
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  icon: LucideIcon;
  features: string[];
  plans: ToolPlan[];
  path?: string;
}

const TOOL_PATH_BY_NAME: Record<string, string> = {
  "ChatGPT": "/tools/chatgpt",
  "Claude Pro": "/tools/claude",
  "Gemini Advanced": "/tools/gemini",
  "Grammarly Premium": "/tools/grammarly",
  "Canva Pro": "/tools/canva",
  "Midjourney": "/tools/midjourney",
  "Perplexity Pro": "/tools/perplexity",
  "Grok Premium": "/tools/grok",
  "GitHub Copilot": "/tools/copilot",
  "AI Tools Vault": "/tools/vault",
};

const TRUST_ITEMS = [
  { icon: CreditCard, label: "bKash / Nagad" },
  { icon: Zap, label: "5–15 min delivery" },
  { icon: ShieldCheck, label: "30-day warranty" },
  { icon: Headphones, label: "Bangla + English support" },
];

export function ToolDetail({ name, tagline, description, accentColor, icon: Icon, features, plans, path: pathProp }: ToolDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const path = pathProp || TOOL_PATH_BY_NAME[name] || `/tools/${name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`;
  usePageMeta({ title: `${name} Bangladesh — bKash/Nagad`, description, path });

  const minPrice = plans.length
    ? Math.min(...plans.map((p) => parseInt(p.price.replace(/[^0-9]/g, ""), 10) || 9999))
    : 0;
  const cheapestPlan = plans.find((p) => parseInt(p.price.replace(/[^0-9]/g, ""), 10) === minPrice) || plans[0];

  const toolFaqs = [
    { q: `How much does ${name} cost in Bangladesh?`, a: `${name} starts at ${cheapestPlan?.price || "৳399"}${cheapestPlan?.period || "/mo"} from AI Team Premium BD, payable in BDT via bKash or Nagad. No international card needed.` },
    { q: `How do I buy ${name} with bKash or Nagad?`, a: `Message AI Team Premium BD on WhatsApp (+880 1533-262758) with the plan you want. We confirm price, share the bKash/Nagad number privately, and deliver login or invite details within ${cheapestPlan?.delivery || "5–15 minutes"}.` },
    { q: `Is ${name} from AI Team Premium BD official?`, a: `Yes. AI Team Premium BD provides official ${name} subscriptions sourced through legitimate channels. No cracked or fake access — fully working features and a 30-day replacement warranty.` },
    { q: `Can I use ${name} in Bangla?`, a: "Yes. Most premium AI tools sold by AI Team Premium BD — including ChatGPT, Claude, and Gemini — generate high-quality Bangla responses. Our support team also assists in Bangla and English." },
  ];

  return (
    <Layout>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "AI Subscriptions", path: "/ai-subscriptions" },
          { name, path },
        ]}
      />
      <ProductSchema
        name={`${name} Bangladesh`}
        description={description}
        path={path}
        priceBDT={minPrice || 399}
        category="AI Subscription"
        rating={{ value: "4.9", count: "84" }}
      />
      <FAQSchema items={toolFaqs} />

      {/* HERO — dark gradient with accent glow */}
      <section style={{ background: `linear-gradient(135deg, ${BRAND.navy} 0%, #1a2d5a 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -120, right: -80, width: 500, height: 500, background: accentColor, opacity: 0.07, borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, left: -60, width: 320, height: 320, background: BRAND.blue, opacity: 0.05, borderRadius: "50%", filter: "blur(70px)", pointerEvents: "none" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center rounded-3xl mb-7" style={{ width: 88, height: 88, background: `${accentColor}1A`, border: `1.5px solid ${accentColor}38` }}>
            <Icon size={44} color={accentColor} strokeWidth={1.4} />
          </div>
          <h1 style={{ color: BRAND.white, fontSize: "clamp(1.9rem, 4.5vw, 3.1rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.022em" }}>
            {name}{" "}
            <span style={{ color: accentColor }}>{tagline}</span>
          </h1>
          <p className="mt-5 mx-auto max-w-lg" style={{ color: "rgba(255,255,255,0.52)", fontSize: "1.02rem", lineHeight: 1.75 }}>
            {description}
          </p>

          {/* Direct-answer block (GEO) */}
          <div className="mt-8 mx-auto max-w-2xl rounded-2xl p-5 text-left" style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${accentColor}28` }}>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.93rem", lineHeight: 1.72 }}>
              <strong style={{ color: BRAND.white }}>{name}</strong> is available in Bangladesh from AI Team Premium BD starting at{" "}
              <strong style={{ color: accentColor }}>{cheapestPlan?.price}{cheapestPlan?.period}</strong>, payable via{" "}
              <strong style={{ color: BRAND.white }}>bKash, Nagad or Bank Transfer</strong> — no international card required. Delivery in{" "}
              <strong style={{ color: BRAND.white }}>{cheapestPlan?.delivery}</strong> with a 30-day replacement warranty and Bangla + English WhatsApp support.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a
              href={`https://wa.me/8801533262758?text=Hi%2C+I+want+to+buy+${encodeURIComponent(name)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-tool-order-whatsapp"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 transition-all"
              style={{ background: "#25D366", color: "#fff", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}
            >
              <WhatsAppIcon size={17} color="#fff" />
              Order on WhatsApp
            </a>
            <a
              href={config.messenger}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-tool-order-messenger"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 transition-all"
              style={{ background: "#0084FF", color: "#fff", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}
            >
              <MessageCircle size={17} color="#fff" />
              Messenger
            </a>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 52, background: `linear-gradient(to top, ${BRAND.white}, transparent)` }} />
      </section>

      {/* TRUST BAR */}
      <section className="py-5">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 px-6 py-5" style={{ background: BRAND.sky, border: "1px solid rgba(37,99,235,0.07)" }}>
            {TRUST_ITEMS.map(({ icon: TIcon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="flex-shrink-0 inline-flex items-center justify-center rounded-full" style={{ width: 32, height: 32, background: `${BRAND.blue}14` }}>
                  <TIcon size={15} color={BRAND.blue} strokeWidth={2} />
                </div>
                <span style={{ color: BRAND.navy, fontSize: "0.8rem", fontWeight: 600 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES + PLANS */}
      <section className="py-16 pb-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Features */}
            <div>
              <h2 className="mb-7" style={{ color: BRAND.navy, fontSize: "1.45rem", fontWeight: 700 }}>What's Included</h2>
              <div className="grid gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3 rounded-xl p-4 transition-all" style={{ background: BRAND.sky, border: "1px solid rgba(37,99,235,0.06)" }}>
                    <div className="flex-shrink-0 flex items-center justify-center rounded-full mt-0.5" style={{ width: 24, height: 24, background: `${accentColor}18` }}>
                      <Check size={13} color={accentColor} strokeWidth={3} />
                    </div>
                    <span style={{ color: BRAND.navy, fontSize: "0.9rem", fontWeight: 500, lineHeight: 1.45 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plans */}
            <div>
              <h2 className="mb-7" style={{ color: BRAND.navy, fontSize: "1.45rem", fontWeight: 700 }}>Choose a Plan</h2>
              <div className="space-y-5">
                {plans.map((plan, idx) => (
                  <div
                    key={plan.label}
                    className="rounded-2xl overflow-hidden"
                    style={{
                      boxShadow: idx === 0 ? `0 8px 32px ${accentColor}1E` : "0 2px 12px rgba(37,99,235,0.05)",
                      border: idx === 0 ? `1.5px solid ${accentColor}42` : "1px solid rgba(37,99,235,0.09)",
                    }}
                  >
                    {/* Accent top bar */}
                    <div style={{ height: 4, background: idx === 0 ? `linear-gradient(90deg, ${accentColor}, ${accentColor}80)` : "rgba(37,99,235,0.1)" }} />
                    <div className="p-7" style={{ background: BRAND.white }}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 style={{ color: BRAND.navy, fontSize: "1.02rem", fontWeight: 600 }}>{plan.label}</h3>
                        <span
                          className="rounded-full px-3 py-0.5"
                          style={{ background: idx === 0 ? accentColor : "#64748b", color: "#fff", fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.05em" }}
                        >
                          {plan.type}
                        </span>
                      </div>
                      <p style={{ color: BRAND.navy, fontSize: "2.3rem", fontWeight: 800, lineHeight: 1 }}>
                        {plan.price}
                        <span style={{ fontSize: "0.82rem", fontWeight: 400, opacity: 0.42 }}>{plan.period}</span>
                      </p>
                      <p className="mt-2.5 flex items-center gap-1.5" style={{ color: accentColor, fontSize: "0.78rem", fontWeight: 600 }}>
                        <Clock size={13} /> {plan.delivery}
                      </p>
                      <div className="mt-4 pt-4 space-y-2" style={{ borderTop: "1px solid rgba(37,99,235,0.07)" }}>
                        {plan.specs.map((s) => (
                          <div key={s.label} className="flex items-center justify-between" style={{ fontSize: "0.82rem" }}>
                            <span style={{ color: BRAND.navy, opacity: 0.45 }}>{s.label}</span>
                            <span style={{ color: BRAND.navy, fontWeight: 500 }}>{s.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 flex gap-2.5">
                        <a
                          href={`https://wa.me/8801533262758?text=Hi%2C+I+want+to+buy+${encodeURIComponent(name)}+${plan.type}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`button-plan-${plan.type.toLowerCase()}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full py-2.5 transition-all"
                          style={{ background: "#25D366", color: BRAND.white, fontSize: "0.78rem", fontWeight: 600, textDecoration: "none" }}
                        >
                          <WhatsAppIcon size={13} color="#fff" /> WhatsApp
                        </a>
                        <a
                          href={config.messenger}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`button-plan-messenger-${plan.type.toLowerCase()}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full py-2.5 transition-all"
                          style={{ background: "#0084FF", color: BRAND.white, fontSize: "0.78rem", fontWeight: 600, textDecoration: "none" }}
                        >
                          <MessageCircle size={13} color="#fff" /> Messenger
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-16" style={{ background: BRAND.sky }}>
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="mb-8 text-center" style={{ color: BRAND.navy, fontSize: "1.4rem", fontWeight: 700 }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {toolFaqs.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: BRAND.white, border: "1px solid rgba(37,99,235,0.07)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  style={{ cursor: "pointer", background: "none", border: "none" }}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span style={{ color: BRAND.navy, fontSize: "0.92rem", fontWeight: 600, flex: 1 }}>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    color={BRAND.blue}
                    style={{
                      flexShrink: 0,
                      marginLeft: 12,
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5" style={{ color: BRAND.navy, opacity: 0.6, fontSize: "0.88rem", lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
