"use client";

import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

type FAQ = { q: string; a: string };

const DATA: FAQ[] = [
  {
    q: "Vilka typer av projekt arbetar ni med?",
    a: "Vi arbetar med allt från små privata byggen till stora infrastruktursatsningar. Våra kunder inkluderar kommuner, byggföretag, arkitekter och tekniska konsulter.",
  },
  {
    q: "Utför ni 3D-scanning och drönarmätningar?",
    a: "Ja. Vi erbjuder laserskanning och drönarmätning (fotogrammetri) med hög precision för modeller, volymer och uppföljning.",
  },
  {
    q: "Hur snabbt kan ni börja ett nytt uppdrag?",
    a: "Normalt inom några arbetsdagar beroende på omfattning och förutsättningar. Vid akuta behov prioriterar vi om efter kapacitet.",
  },
  {
    q: "Arbetar ni med BIM-modeller?",
    a: "Ja. Vi producerar, konsumerar och levererar data som passar ert BIM-flöde och era CAD-/projekteringsverktyg.",
  },
  {
    q: "Varför ska vi välja Milan Mätkonsult?",
    a: "Certifierade mättekniker, modern utrustning och över 20 års erfarenhet – leverans med millimeterprecision och ansvar.",
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  // Add FAQPage structured data for SEO
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.milanmatkonsult.com';
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": DATA.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };

    const scriptId = 'faq-structured-data';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqData);
  }, []);

  return (
    <section className="w-full bg-white relative z-0 py-12 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: section label + heading (sticky) */}
        <div className="lg:sticky lg:top-32 self-start">
          <div className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100/80 text-gray-500">
              <span className="h-1 w-1 rounded-full bg-gray-400/70" />
              <span>FAQs</span>
              <span className="h-1 w-1 rounded-full bg-gray-400/70" />
            </span>
          </div>

          <h2 className="mt-2 text-3xl md:text-4xl font-medium text-[#010207] leading-snug">
            Har du frågor?
            <br />
            Vi har svaren.
          </h2>
        </div>

        {/* Right: accordions */}
        <div className="max-w-3xl mt-[-20px] md:mt-0 w-full space-y-6">
          {DATA.map((item, i) => {
            const isOpen = openItems.has(i);
            return (
              <div key={i} className="rounded-2xl">
                <button
                  onClick={() => {
                    const newOpenItems = new Set(openItems);
                    if (isOpen) {
                      newOpenItems.delete(i);
                    } else {
                      newOpenItems.add(i);
                    }
                    setOpenItems(newOpenItems);
                  }}
                  className={[
                    "w-full text-left",
                    "bg-[#F4F4F4] hover:bg-[#F1F1F1] transition",
                    "px-6 py-5",
                    isOpen ? "rounded-t-2xl" : "rounded-2xl",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[17px] md:text-[18px] leading-snug text-gray-700">
                      {item.q}
                    </span>

                    <span
                      className={[
                        "inline-flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ease-in-out",
                        isOpen
                          ? "bg-[#E88026] text-white border border-[#E88026]"
                          : "text-gray-700 border border-gray-400",
                      ].join(" ")}
                    >
                      <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                        <Plus size={16} strokeWidth={2} />
                      </div>
                    </span>
                  </div>
                </button>

                <div
                  className={[
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    isOpen ? "max-h-96" : "max-h-0",
                  ].join(" ")}
                >
                  <div className="bg-[#F8F8F8] rounded-b-2xl px-6 py-5">
                    <p className="text-[15px] leading-relaxed text-gray-600">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
