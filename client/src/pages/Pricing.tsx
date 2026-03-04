import { Layout } from "@/components/layout/Layout";
import { BRAND, WhatsAppIcon } from "@/components/brand/LogoIcons";
import { Link } from "wouter";
import { Check, Star, ArrowUpRight, Clock } from "lucide-react";

const AI_PLANS = [
  {
    name: "Solo",
    badge: "Best for Students",
    price: "৳399",
    period: "/mo",
    tool: "ChatGPT Plus Shared",
    delivery: "5-15 min",
    features: ["GPT-4o access", "DALL-E 3", "Shared seat", "WhatsApp support"],
    popular: false,
    whatsapp: "https://wa.me/8801533262758?text=Hi%2C+I+want+ChatGPT+Plus+Shared+(Solo)",
  },
  {
    name: "Pro",
    badge: "Most Popular",
    price: "৳950",
    period: "/mo",
    tool: "ChatGPT Premium Shared",
    delivery: "5-15 min",
    features: ["Extended limits", "o1 & o3 models", "Deep Research", "Priority support"],
    popular: true,
    whatsapp: "https://wa.me/8801533262758?text=Hi%2C+I+want+ChatGPT+Premium+Shared+(Pro)",
  },
  {
    name: "Vault",
    badge: "All-in-One",
    price: "৳1,990",
    period: "/mo",
    tool: "ChatGPT + Claude + Gemini",
    delivery: "6 hr",
    features: ["3 AI tools", "Best value bundle", "Full access", "Dedicated support"],
    popular: false,
    whatsapp: "https://wa.me/8801533262758?text=Hi%2C+I+want+AI+Tools+Vault",
  },
];

const SERVICE_PLANS = [
  {
    name: "Starter",
    desc: "For freelancers and solo entrepreneurs.",
    price: "Custom",
    features: ["1 AI Subscription", "Basic branding", "Standard support", "48h delivery"],
    popular: false,
  },
  {
    name: "Growth",
    desc: "For growing businesses needing serious tools.",
    price: "Custom",
    features: ["3 AI Subscriptions", "Complete brand identity", "Landing page website", "SEO setup", "Priority WhatsApp support"],
    popular: true,
  },
  {
    name: "Agency",
    desc: "Full-scale solution for established teams.",
    price: "Custom",
    features: ["Unlimited shared AI tools", "Full stack web app", "Marketing campaign", "Custom AI workflows", "24/7 dedicated support"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <Layout>
      <section className="py-20" style={{ background: BRAND.sky }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <p className="mb-3 uppercase" style={{ color: BRAND.blue, fontSize: "0.72rem", letterSpacing: "0.18em", fontWeight: 600 }}>Pricing</p>
          <h1 style={{ color: BRAND.navy, fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, lineHeight: 1.15 }}>
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 mx-auto max-w-xl" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.95rem", lineHeight: 1.65 }}>
            All prices in BDT. Pay via bKash, Nagad, or Bank Transfer. No hidden fees.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 style={{ color: BRAND.navy, fontSize: "1.5rem", fontWeight: 700 }}>AI Subscription Plans</h2>
            <p className="mt-2" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.88rem" }}>Instant delivery, real access, no credit card needed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {AI_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-2xl p-7"
                style={{
                  background: BRAND.white,
                  border: plan.popular ? `2px solid ${BRAND.blue}` : "1px solid rgba(37,99,235,0.06)",
                  boxShadow: plan.popular ? "0 8px 32px rgba(37,99,235,0.12)" : undefined,
                }}
              >
                {plan.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-white"
                    style={{ background: BRAND.blue, fontSize: "0.68rem", fontWeight: 600 }}
                  >
                    <Star size={11} fill="#fff" /> {plan.badge}
                  </span>
                )}
                <p style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.78rem", fontWeight: 600, marginBottom: 4 }}>{plan.name}</p>
                <p style={{ color: BRAND.navy, fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}>
                  {plan.price}<span style={{ fontSize: "0.85rem", fontWeight: 400, opacity: 0.5 }}>{plan.period}</span>
                </p>
                <p className="mt-2 flex items-center gap-1.5" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.82rem" }}>
                  {plan.tool}
                </p>
                <p className="mt-1 flex items-center gap-1.5" style={{ color: BRAND.blue, fontSize: "0.75rem", fontWeight: 500 }}>
                  <Clock size={12} /> {plan.delivery}
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: BRAND.navy, opacity: 0.6 }}>
                      <Check size={14} color={BRAND.blue} strokeWidth={3} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`button-plan-${plan.name.toLowerCase()}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full py-3 transition-all"
                  style={{
                    background: plan.popular ? BRAND.blue : BRAND.navy,
                    color: BRAND.white,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <WhatsAppIcon size={14} color="#fff" /> Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: BRAND.sky }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 style={{ color: BRAND.navy, fontSize: "1.5rem", fontWeight: 700 }}>Service Packages</h2>
            <p className="mt-2" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.88rem" }}>Custom-quoted based on your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SERVICE_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-2xl p-7"
                style={{
                  background: BRAND.white,
                  border: plan.popular ? `2px solid ${BRAND.blue}` : "1px solid rgba(37,99,235,0.06)",
                }}
              >
                {plan.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-white"
                    style={{ background: BRAND.blue, fontSize: "0.68rem", fontWeight: 600 }}
                  >
                    <Star size={11} fill="#fff" /> Recommended
                  </span>
                )}
                <h3 style={{ color: BRAND.navy, fontSize: "1.15rem", fontWeight: 700 }}>{plan.name}</h3>
                <p className="mt-1" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.82rem", minHeight: 36 }}>{plan.desc}</p>
                <p className="mt-3" style={{ color: BRAND.navy, fontSize: "1.8rem", fontWeight: 700 }}>{plan.price}</p>
                <ul className="mt-5 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: BRAND.navy, opacity: 0.6 }}>
                      <Check size={14} color={BRAND.blue} strokeWidth={3} /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/start-a-project"
                  data-testid={`link-service-plan-${plan.name.toLowerCase()}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full py-3 transition-all"
                  style={{
                    background: plan.popular ? BRAND.blue : "transparent",
                    color: plan.popular ? BRAND.white : BRAND.navy,
                    border: plan.popular ? "none" : `1px solid ${BRAND.navy}`,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Request Quote <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h3 style={{ color: BRAND.navy, fontSize: "1.2rem", fontWeight: 600 }}>Looking just for individual tools?</h3>
          <p className="mt-2" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.88rem" }}>
            Browse our full catalog of AI subscriptions with individual pricing.
          </p>
          <Link
            href="/ai-subscriptions"
            data-testid="link-pricing-subscriptions"
            className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-2.5 transition-all"
            style={{ border: `1px solid ${BRAND.navy}`, color: BRAND.navy, fontSize: "0.82rem", fontWeight: 600, textDecoration: "none" }}
          >
            View All Subscriptions <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}