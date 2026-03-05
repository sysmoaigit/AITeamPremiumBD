import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight, ChevronDown, ChevronRight, Layers } from "lucide-react";
import { BRAND, LogoStacked } from "@/components/brand/LogoIcons";

const NAV_LINKS = [
  { name: "ChatGPT Plans", href: "/chatgpt-plans" },
  { name: "Support", href: "/support" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

const CATEGORIES = [
  {
    group: "AI Tools",
    items: [
      {
        name: "ChatGPT Premium Subscriptions",
        href: "/chatgpt-plans",
        description: "৳৩৯৯–৳৪,৫০০/mo · 7 plans · bKash/Nagad",
      },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setCategoriesOpen(false);
    setMobileCategoriesOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCategoriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Categories dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                data-testid="button-nav-categories"
                onClick={() => setCategoriesOpen((o) => !o)}
                className="flex items-center gap-1.5 px-5 py-2 rounded-full transition-all"
                style={{
                  background: categoriesOpen ? BRAND.sky : undefined,
                  color: categoriesOpen ? BRAND.blue : BRAND.navy,
                  fontSize: "0.82rem",
                  fontWeight: categoriesOpen ? 600 : 450,
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Categories
                <ChevronDown
                  size={13}
                  strokeWidth={2.5}
                  style={{
                    transition: "transform 0.18s",
                    transform: categoriesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              {categoriesOpen && (
                <div
                  className="absolute left-0 top-full mt-2 rounded-2xl shadow-xl border overflow-hidden"
                  style={{
                    minWidth: 280,
                    background: BRAND.white,
                    borderColor: "rgba(37,99,235,0.10)",
                    boxShadow: "0 8px 32px rgba(15,23,42,0.12)",
                    zIndex: 100,
                  }}
                  data-testid="dropdown-categories"
                >
                  {CATEGORIES.map((cat) => (
                    <div key={cat.group}>
                      {/* Group header */}
                      <div
                        className="flex items-center gap-2 px-4 pt-4 pb-2"
                        style={{ color: BRAND.blue, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
                      >
                        <Layers size={12} strokeWidth={2.5} />
                        {cat.group}
                      </div>
                      {/* Group items */}
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          data-testid={`link-categories-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-start gap-3 px-4 py-3 transition-all group"
                          style={{ textDecoration: "none" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = BRAND.sky; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >
                          <ChevronRight size={14} strokeWidth={2} style={{ color: BRAND.blue, marginTop: 2, flexShrink: 0 }} />
                          <div>
                            <div style={{ color: BRAND.navy, fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.3 }}>
                              {item.name}
                            </div>
                            <div style={{ color: "#64748B", fontSize: "0.72rem", marginTop: 2 }}>
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div style={{ height: 8 }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Regular nav links */}
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

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden border-t px-6 pb-6 pt-4"
          style={{
            background: BRAND.white,
            borderColor: "rgba(37,99,235,0.06)",
          }}
        >
          <nav className="flex flex-col gap-1">
            {/* Categories expandable section */}
            <button
              data-testid="button-mobile-categories"
              onClick={() => setMobileCategoriesOpen((o) => !o)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all"
              style={{
                background: mobileCategoriesOpen ? BRAND.sky : undefined,
                color: mobileCategoriesOpen ? BRAND.blue : BRAND.navy,
                fontSize: "0.95rem",
                fontWeight: mobileCategoriesOpen ? 600 : 400,
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              Categories
              <ChevronDown
                size={16}
                strokeWidth={2}
                style={{
                  transition: "transform 0.18s",
                  transform: mobileCategoriesOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {mobileCategoriesOpen && (
              <div
                className="ml-4 mb-1 rounded-xl overflow-hidden border"
                style={{ borderColor: "rgba(37,99,235,0.10)", background: BRAND.sky }}
              >
                {CATEGORIES.map((cat) => (
                  <div key={cat.group}>
                    <div
                      className="px-4 pt-3 pb-1.5"
                      style={{ color: BRAND.blue, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
                    >
                      {cat.group}
                    </div>
                    {cat.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        data-testid={`link-mobile-categories-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-2 px-4 py-3"
                        style={{ color: BRAND.navy, fontSize: "0.9rem", fontWeight: 500, textDecoration: "none" }}
                      >
                        <ChevronRight size={14} strokeWidth={2} style={{ color: BRAND.blue, flexShrink: 0 }} />
                        {item.name}
                      </Link>
                    ))}
                    <div style={{ height: 6 }} />
                  </div>
                ))}
              </div>
            )}

            {/* Regular nav links */}
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
