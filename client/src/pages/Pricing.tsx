import { Layout } from "@/components/layout/Layout";
import { BRAND, WhatsAppIcon } from "@/components/brand/LogoIcons";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";
import { Check, Star, ArrowUpRight, Clock, ChevronRight } from "lucide-react";
import { chatgptPlans } from "@/lib/plans";

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
  usePageMeta({
    title: "Pricing",
    description: "Transparent AI subscription and digital service pricing in BDT. Pay via bKash or Nagad. ChatGPT Plus from ৳399/mo.",
  });
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {chatgptPlans.map((plan) => (
              <div
                key={plan.slug}
                className="relative flex flex-col rounded-2xl p-7 hover-elevate transition-all"
                style={{
                  background: BRAND.white,
                  border: plan.slug === 'plus-premium-shared' ? `2px solid ${BRAND.blue}` : "1px solid rgba(37,99,235,0.06)",
                  boxShadow: plan.slug === 'plus-premium-shared' ? "0 8px 32px rgba(37,99,235,0.12)" : undefined,
                }}
              >
                {plan.badge && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-white"
                    style={{ background: plan.slug === 'plus-premium-shared' ? BRAND.blue : BRAND.navy, fontSize: "0.68rem", fontWeight: 600 }}
                  >
                    <Star size={11} fill="#fff" /> {plan.badge}
                  </span>
                )}
                <p style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.78rem", fontWeight: 600, marginBottom: 4 }}>{plan.tier}</p>
                <p style={{ color: BRAND.navy, fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}>
                  {plan.priceLabel.split('/')[0]}<span style={{ fontSize: "0.85rem", fontWeight: 400, opacity: 0.5 }}>/{plan.priceLabel.split('/')[1]}</span>
                </p>
                <p className="mt-2 flex items-center gap-1.5" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.82rem" }}>
                  {plan.title}
                </p>
                <p className="mt-1 flex items-center gap-1.5" style={{ color: BRAND.blue, fontSize: "0.75rem", fontWeight: 500 }}>
                  <Clock size={12} /> {plan.deliverySLA} delivery
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                   {/* Features were not in chatgptPlans, I will add generic ones or we can just leave empty/add 3 basics */}
                  <li className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: BRAND.navy, opacity: 0.6 }}>
                    <Check size={14} color={BRAND.blue} strokeWidth={3} /> Official {plan.plan} Access
                  </li>
                  <li className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: BRAND.navy, opacity: 0.6 }}>
                    <Check size={14} color={BRAND.blue} strokeWidth={3} /> {plan.deviceRule}
                  </li>
                  <li className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: BRAND.navy, opacity: 0.6 }}>
                    <Check size={14} color={BRAND.blue} strokeWidth={3} /> {plan.warranty.split('.')[0]}
                  </li>
                </ul>
                <a
                  href={`https://wa.me/8801533262758?text=Hi%2C+I+want+to+order+${encodeURIComponent(plan.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`button-plan-${plan.slug}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full py-3 transition-all"
                  style={{
                    background: plan.slug === 'plus-premium-shared' ? BRAND.blue : BRAND.navy,
                    color: BRAND.white,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <WhatsAppIcon size={14} color="#fff" /> Order Now
                </a>
                <Link href={`/chatgpt/${plan.slug}`} className="mt-3 text-center text-xs font-medium hover:underline" style={{ color: BRAND.blue }}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/chatgpt-plans" className="inline-flex items-center gap-1 font-semibold hover:underline" style={{ color: BRAND.blue }}>
              Compare All Plans <ChevronRight size={16} />
            </Link>
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
            <div
              className="relative flex flex-col rounded-2xl p-7"
              style={{
                background: BRAND.white,
                border: "1px solid rgba(37,99,235,0.06)",
              }}
            >
              <h3 style={{ color: BRAND.navy, fontSize: "1.15rem", fontWeight: 700 }}>Digital Services</h3>
              <p className="mt-1" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.82rem", minHeight: 36 }}>Custom solutions for Brand Design, Web Dev & Marketing.</p>
              <p className="mt-3" style={{ color: BRAND.navy, fontSize: "1.8rem", fontWeight: 700 }}>Custom Quote</p>
              <ul className="mt-5 space-y-3 flex-1">
                <li className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: BRAND.navy, opacity: 0.6 }}>
                  <Check size={14} color={BRAND.blue} strokeWidth={3} /> Logo & Identity
                </li>
                <li className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: BRAND.navy, opacity: 0.6 }}>
                  <Check size={14} color={BRAND.blue} strokeWidth={3} /> SEO Optimized Web
                </li>
                <li className="flex items-center gap-2" style={{ fontSize: "0.82rem", color: BRAND.navy, opacity: 0.6 }}>
                  <Check size={14} color={BRAND.blue} strokeWidth={3} /> AI Implementation
                </li>
              </ul>
              <Link
                href="/services"
                data-testid="link-digital-services"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full py-3 transition-all"
                style={{
                  background: BRAND.navy,
                  color: BRAND.white,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Learn More <ArrowUpRight size={14} />
              </Link>
            </div>
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