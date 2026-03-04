import { Layout } from "@/components/layout/Layout";
import { BRAND, WhatsAppIcon } from "@/components/brand/LogoIcons";
import { Clock, Check, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const SUBS = [
  { name: "ChatGPT Plus", type: "Shared", price: "৳399", period: "/mo", delivery: "5-15 min", link: "/tools/chatgpt" },
  { name: "ChatGPT Plus", type: "Personal", price: "৳2,500", period: "/mo", delivery: "2-4 hr", link: "/tools/chatgpt" },
  { name: "ChatGPT Premium", type: "Shared", price: "৳950", period: "/mo", delivery: "5-15 min", link: "/tools/chatgpt" },
  { name: "ChatGPT Team", type: "Shared", price: "৳699", period: "/seat/mo", delivery: "5-15 min", link: "/tools/chatgpt" },
  { name: "Claude Pro", type: "Shared", price: "৳599", period: "/mo", delivery: "5-15 min", link: "/tools/claude" },
  { name: "Claude Pro", type: "Personal", price: "৳2,400", period: "/mo", delivery: "2-4 hr", link: "/tools/claude" },
  { name: "Gemini Advanced", type: "Shared", price: "৳499", period: "/mo", delivery: "5-15 min", link: "/tools/gemini" },
  { name: "Gemini Advanced", type: "Personal", price: "৳2,300", period: "/mo", delivery: "2-4 hr", link: "/tools/gemini" },
  { name: "Grammarly Premium", type: "Private", price: "৳800", period: "/mo", delivery: "1-2 hr", link: "/tools/grammarly" },
  { name: "Perplexity Pro", type: "Shared", price: "৳599", period: "/mo", delivery: "5-15 min", link: "#" },
  { name: "Grok Premium", type: "Shared", price: "৳699", period: "/mo", delivery: "5-15 min", link: "#" },
  { name: "Midjourney", type: "Shared", price: "৳1,200", period: "/mo", delivery: "5-15 min", link: "#" },
  { name: "Canva Pro", type: "Team", price: "৳350", period: "/mo", delivery: "5-15 min", link: "#" },
  { name: "GitHub Copilot", type: "Private", price: "৳1,200", period: "/mo", delivery: "2-4 hr", link: "#" },
  { name: "AI Tools Vault", type: "Bundle", price: "৳1,990", period: "/mo", delivery: "6 hr", link: "#" },
];

function typeBadge(type: string) {
  const colors: Record<string, string> = {
    Shared: "#22C55E",
    Personal: "#2563EB",
    Private: "#0F172A",
    Team: "#F59E0B",
    Bundle: "#EF4444",
  };
  return colors[type] || BRAND.blue;
}

export default function AISubscriptions() {
  return (
    <Layout>
      <section className="py-20" style={{ background: BRAND.sky }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <p className="mb-3 uppercase" style={{ color: BRAND.blue, fontSize: "0.72rem", letterSpacing: "0.18em", fontWeight: 600 }}>AI Subscriptions</p>
          <h1 style={{ color: BRAND.navy, fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, lineHeight: 1.15 }}>
            All Premium AI Tools
          </h1>
          <p className="mt-4 mx-auto max-w-xl" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.95rem", lineHeight: 1.65 }}>
            Pay via bKash / Nagad. No international credit card. Delivered fast.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUBS.map((sub, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl p-6"
                style={{ background: BRAND.white, border: "1px solid rgba(37,99,235,0.06)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 style={{ color: BRAND.navy, fontSize: "1rem", fontWeight: 600 }}>{sub.name}</h3>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-white"
                    style={{ background: typeBadge(sub.type), fontSize: "0.65rem", fontWeight: 600 }}
                  >
                    {sub.type}
                  </span>
                </div>
                <p style={{ color: BRAND.navy, fontSize: "1.6rem", fontWeight: 700, lineHeight: 1 }}>
                  {sub.price}<span style={{ fontSize: "0.78rem", fontWeight: 400, opacity: 0.5 }}>{sub.period}</span>
                </p>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: BRAND.navy, opacity: 0.55 }}>
                    <Check size={13} color={BRAND.blue} strokeWidth={3} /> Official access
                  </li>
                  <li className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: BRAND.navy, opacity: 0.55 }}>
                    <Check size={13} color={BRAND.blue} strokeWidth={3} /> Replacement guarantee
                  </li>
                  <li className="flex items-center gap-2" style={{ fontSize: "0.8rem", color: BRAND.blue }}>
                    <Clock size={13} strokeWidth={2} /> {sub.delivery} delivery
                  </li>
                </ul>
                <div className="mt-5 flex gap-2">
                  {sub.link !== "#" ? (
                    <Link
                      href={sub.link}
                      data-testid={`link-sub-detail-${i}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full py-2.5 transition-all"
                      style={{ border: `1px solid ${BRAND.blue}`, color: BRAND.blue, fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}
                    >
                      Details <ArrowUpRight size={12} />
                    </Link>
                  ) : null}
                  <a
                    href={`https://wa.me/8801533262758?text=Hi%2C+I+want+to+buy+${encodeURIComponent(sub.name)}+${sub.type}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`button-sub-order-${i}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full py-2.5 transition-all"
                    style={{ background: BRAND.blue, color: BRAND.white, fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}
                  >
                    <WhatsAppIcon size={13} color="#fff" /> Order
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl p-8 text-center" style={{ background: BRAND.sky, border: "1px solid rgba(37,99,235,0.06)" }}>
            <h3 style={{ color: BRAND.navy, fontSize: "1.1rem", fontWeight: 600 }}>Need a tool not listed here?</h3>
            <p className="mt-2" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.88rem" }}>We can procure almost any digital subscription for you.</p>
            <a
              href="https://wa.me/8801533262758?text=Hi%2C+I+need+a+custom+AI+tool+subscription"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-custom-tool"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-2.5 transition-all"
              style={{ background: BRAND.navy, color: BRAND.white, fontSize: "0.82rem", fontWeight: 600, textDecoration: "none" }}
            >
              Request Custom Tool
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}