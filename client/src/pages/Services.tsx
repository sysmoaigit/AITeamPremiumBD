import { Layout } from "@/components/layout/Layout";
import { BRAND, WhatsAppIcon } from "@/components/brand/LogoIcons";
import { usePageMeta } from "@/hooks/use-page-meta";
import { supportOffers, memberships } from "@/lib/support-offers";
import { Check, ArrowUpRight, Star, Clock, Heart } from "lucide-react";

export default function Services() {
  usePageMeta({
    title: "AI Support & Consultancy Services",
    description: "Premium AI support sessions, student study packs, and business AI setup in Bangladesh. Live Google Meet sessions with AI experts.",
  });

  return (
    <Layout>
      <section className="py-20" style={{ background: BRAND.sky }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <p className="mb-3 uppercase" style={{ color: BRAND.blue, fontSize: "0.72rem", letterSpacing: "0.18em", fontWeight: 600 }}>Support & Consultancy</p>
          <h1 style={{ color: BRAND.navy, fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, lineHeight: 1.15 }}>
            Human-Led AI Support
          </h1>
          <p className="mt-4 mx-auto max-w-xl" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.95rem", lineHeight: 1.65 }}>
            Personalized AI coaching and technical setup for students, freelancers, and businesses.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: BRAND.navy }}>AI Support Packs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportOffers.map((offer) => (
              <div
                key={offer.slug}
                className="flex flex-col rounded-2xl p-7"
                style={{ background: BRAND.white, border: "1px solid rgba(37,99,235,0.06)" }}
              >
                <p style={{ color: BRAND.blue, fontSize: "0.75rem", fontWeight: 600, marginBottom: 4 }}>{offer.targetEN}</p>
                <h3 style={{ color: BRAND.navy, fontSize: "1.25rem", fontWeight: 700 }}>{offer.title}</h3>
                <p className="mt-2" style={{ color: BRAND.navy, fontSize: "1.75rem", fontWeight: 700 }}>
                  {offer.priceLabel}
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs" style={{ color: BRAND.navy, opacity: 0.5 }}>
                  <span className="flex items-center gap-1"><Clock size={12} /> {offer.sessions}</span>
                  <span className="flex items-center gap-1"><Monitor size={12} /> {offer.platform}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {offer.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ fontSize: "0.82rem", color: BRAND.navy, opacity: 0.6 }}>
                      <Check size={14} color={BRAND.blue} className="mt-0.5 shrink-0" strokeWidth={3} /> {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 p-3 rounded-lg bg-blue-50 text-[10px]" style={{ color: BRAND.blue, lineHeight: 1.4 }}>
                  <Heart size={10} className="inline mr-1" /> {offer.guarantee}
                </p>
                <a
                  href={`https://wa.me/8801533262758?text=Hi%2C+I+want+to+book+${encodeURIComponent(offer.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full py-3 transition-all"
                  style={{ background: BRAND.navy, color: BRAND.white, fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
                >
                  {offer.ctaText} <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: BRAND.sky }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: BRAND.navy }}>Support Membership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {memberships.map((m) => (
              <div
                key={m.slug}
                className="flex flex-col rounded-2xl p-7 text-center"
                style={{ background: BRAND.white, border: "1px solid rgba(37,99,235,0.06)" }}
              >
                <h3 style={{ color: BRAND.navy, fontSize: "1.1rem", fontWeight: 700 }}>{m.title}</h3>
                <p className="mt-2" style={{ color: BRAND.blue, fontSize: "1.5rem", fontWeight: 700 }}>{m.priceLabel}</p>
                <div className="mt-4 space-y-2 text-sm" style={{ color: BRAND.navy, opacity: 0.6 }}>
                  <p>{m.hours} Hours Support</p>
                  <p>{m.extras}</p>
                </div>
                <a
                  href={`https://wa.me/8801533262758?text=Hi%2C+I+want+to+join+the+${m.title}+Membership`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full py-2.5"
                  style={{ background: BRAND.blue, color: BRAND.white, fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}
                >
                  Join Membership
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Monitor({ size, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="3" rx="2" ry="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>
    </svg>
  );
}
