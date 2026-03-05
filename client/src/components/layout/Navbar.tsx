import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND, LogoStacked } from "@/components/brand/LogoIcons";

const NAV_LINKS = [
  { name: "ChatGPT Plans", href: "/chatgpt-plans" },
  { name: "Support", href: "/support" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: "rgba(255,255,255,0.92)",
        borderColor: "rgba(37,99,235,0.06)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between" style={{ height: 80 }}>
          <Link href="/" className="flex-shrink-0" style={{ textDecoration: "none" }} data-testid="link-logo">
            <LogoStacked size="sm" iconColor={BRAND.blue} textColor={BRAND.navy} />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-5 py-2 rounded-full transition-all"
                  style={{
                    background: isActive ? BRAND.blue : undefined,
                    color: isActive ? BRAND.white : BRAND.navy,
                    fontSize: "0.82rem",
                    fontWeight: isActive ? 600 : 450,
                    whiteSpace: "nowrap" as const,
                    letterSpacing: "0.01em",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/start-a-project"
            data-testid="link-nav-contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-6 py-2.5 transition-all"
            style={{
              background: BRAND.navy,
              color: BRAND.white,
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Get Started
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>

          <button
            className="md:hidden p-2 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: BRAND.navy }}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden border-t px-6 pb-6 pt-4"
          style={{
            background: BRAND.white,
            borderColor: "rgba(37,99,235,0.06)",
          }}
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-3 rounded-xl transition-all"
                  style={{
                    background: isActive ? BRAND.sky : undefined,
                    color: isActive ? BRAND.blue : BRAND.navy,
                    fontSize: "0.95rem",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/start-a-project"
              data-testid="link-mobile-contact"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl px-5 py-3"
              style={{
                background: BRAND.navy,
                color: BRAND.white,
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Get Started
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}