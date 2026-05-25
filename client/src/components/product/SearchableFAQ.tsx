import { useState, useEffect } from "react";
import { Search, ChevronDown, MessageCircle } from "lucide-react";
import { config } from "@/lib/config";

export interface FAQItem {
  question: string;
  answer: string;
}

interface SearchableFAQProps {
  faqs: FAQItem[];
  productName?: string;
}

export function SearchableFAQ({ faqs, productName }: SearchableFAQProps) {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase())
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-4">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            strokeWidth={2}
          />
          <input
            type="search"
            placeholder={`Search ${filtered.length} questions…`}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setOpenIndex(null); }}
            data-testid="input-faq-search"
            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500/40 transition"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">No results for "{query}"</p>
            <a
              href={config.whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ background: "#25D366", textDecoration: "none" }}
            >
              <MessageCircle size={15} />
              Contact us on WhatsApp
            </a>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                  style={isOpen ? { borderLeftColor: "#2563EB", borderLeftWidth: 3 } : {}}
                  data-testid={`faq-item-${i}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
                    data-testid={`faq-toggle-${i}`}
                  >
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 pr-4 leading-snug">{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className="flex-shrink-0 text-gray-400 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      strokeWidth={2}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 bg-white dark:bg-gray-900 border-t border-gray-50 dark:border-gray-800">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
