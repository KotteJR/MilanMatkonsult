"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQ = { q: string; a: string };

const DATA: FAQ[] = [
  {
    q: "Hur fungerar laserskanning?",
    a: "Laserskanning är en digital teknik som använder laserstrålar för att skapa en 3D-modell av en byggnad eller en område. Det gör att vi kan få en fullständig bild av byggnaden eller området, inklusive alla detaljer och dimensioner.",
  },
  {
    q: "Vad är terrester laserskanning?",
    a: "Terrester laserskanning är en teknik som använder laserskanning för att skapa en 3D-modell av en byggnad eller en område. Det gör att vi kan få en fullständig bild av byggnaden eller området, inklusive alla detaljer och dimensioner.",
  },
  {
    q: "Vad är LAS-data?",
    a: "LAS-data är en form av data som används för att skapa en 3D-modell av en byggnad eller en område. Det gör att vi kan få en fullständig bild av byggnaden eller området, inklusive alla detaljer och dimensioner.",
  },
  {
    q: "Vad är ett punktmoln?",
    a: "Punktmoln är en samling av punkter som används för att skapa en 3D-modell av en byggnad eller en område. Det gör att vi kan få en fullständig bild av byggnaden eller området, inklusive alla detaljer och dimensioner.",
  },
  {
    q: "Är ni godkända för offentliga upphandlingar?",
    a: "Ja. Vi är godkända för offentliga upphandlingar.",
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  return (
    <section className="w-full bg-white py-20 md:py-18">
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

          <h2 className="text-3xl md:text-4xl font-medium text-[#010207] leading-snug">
            Har du frågor?
            <br />
            Vi har svaren.
          </h2>
        </div>

        {/* Right: accordions */}
        <div className="max-w-3xl w-full space-y-6">
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
                          : "text-gray-500 border border-gray-400",
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
                    <p className="text-[15px] leading-relaxed text-gray-700/90">
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
