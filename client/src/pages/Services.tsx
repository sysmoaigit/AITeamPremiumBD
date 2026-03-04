import { Layout } from "@/components/layout/Layout";
import { BRAND, WhatsAppIcon } from "@/components/brand/LogoIcons";
import { Link } from "wouter";
import {
  Paintbrush,
  MonitorSmartphone,
  Target,
  Smartphone,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Paintbrush,
    title: "Brand Identity Design",
    desc: "We craft memorable brand identities that communicate your values. From logo design to full brand guidelines, we ensure your business stands out.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Collateral", "UI/UX Design"],
  },
  {
    icon: MonitorSmartphone,
    title: "Web Development",
    desc: "Custom, responsive, and high-performance websites. Whether it's a corporate site or a complex web app, we build scalable solutions.",
    features: ["React / Next.js", "E-commerce Solutions", "CMS Development", "Performance Optimization"],
  },
  {
    icon: Target,
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies to increase your reach, engage your audience, and drive conversions across all digital channels.",
    features: ["SEO Optimization", "Social Media Management", "PPC Campaigns", "Content Strategy"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile applications designed for seamless user experiences on iOS and Android devices.",
    features: ["React Native", "Flutter", "UI/UX App Design", "App Store Deployment"],
  },
  {
    icon: BrainCircuit,
    title: "AI Consultancy",
    desc: "Stay ahead of the curve. We analyze your business processes and integrate AI tools to automate workflows and boost productivity.",
    features: ["Workflow Automation", "Custom ChatGPT Bots", "Prompt Engineering", "Team Training"],
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="py-20" style={{ background: BRAND.sky }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <p className="mb-3 uppercase" style={{ color: BRAND.blue, fontSize: "0.72rem", letterSpacing: "0.18em", fontWeight: 600 }}>Our Services</p>
          <h1 style={{ color: BRAND.navy, fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 700, lineHeight: 1.15 }}>
            Digital Services for Growing Businesses
          </h1>
          <p className="mt-4 mx-auto max-w-xl" style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.95rem", lineHeight: 1.65 }}>
            AITPBD is more than AI tools. We are a full-service digital agency dedicated to elevating your brand.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-20">
          {SERVICES.map((svc, idx) => (
            <div
              key={svc.title}
              className={`flex flex-col md:flex-row gap-10 items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 w-full">
                <div
                  className="rounded-2xl flex items-center justify-center aspect-[4/3]"
                  style={{ background: BRAND.sky, border: "1px solid rgba(37,99,235,0.06)" }}
                >
                  <svc.icon size={80} color={BRAND.blue} strokeWidth={1.2} />
                </div>
              </div>
              <div className="flex-1 space-y-5">
                <div
                  className="inline-flex items-center justify-center rounded-xl"
                  style={{ width: 48, height: 48, background: BRAND.sky }}
                >
                  <svc.icon size={22} color={BRAND.blue} strokeWidth={2} />
                </div>
                <h2 style={{ color: BRAND.navy, fontSize: "1.6rem", fontWeight: 700 }}>{svc.title}</h2>
                <p style={{ color: BRAND.navy, opacity: 0.5, fontSize: "0.92rem", lineHeight: 1.7 }}>
                  {svc.desc}
                </p>
                <ul className="grid grid-cols-2 gap-3 pt-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2" style={{ color: BRAND.navy, fontSize: "0.85rem", fontWeight: 500 }}>
                      <span className="block rounded-full" style={{ width: 6, height: 6, background: BRAND.blue }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-3">
                  <Link
                    href="/start-a-project"
                    data-testid={`link-service-inquire-${idx}`}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 transition-all"
                    style={{ background: BRAND.navy, color: BRAND.white, fontSize: "0.82rem", fontWeight: 600, textDecoration: "none" }}
                  >
                    Inquire Now <ArrowUpRight size={14} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: BRAND.navy }} className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 style={{ color: BRAND.white, fontSize: "1.8rem", fontWeight: 700 }}>Have a project in mind?</h2>
          <p className="mt-3" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.92rem", lineHeight: 1.6 }}>
            Tell us about your requirements and get a free quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="https://wa.me/8801533262758?text=Hi%2C+I+want+to+discuss+a+project+with+AITPBD"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-services-whatsapp"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 transition-all"
              style={{ background: "#25D366", color: "#fff", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none" }}
            >
              <WhatsAppIcon size={16} color="#fff" /> Chat on WhatsApp
            </a>
            <Link
              href="/start-a-project"
              data-testid="link-services-contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: BRAND.white, fontSize: "0.88rem", fontWeight: 500, textDecoration: "none" }}
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}