"use client";

import { ArrowRight } from "lucide-react";

export default function ContactCtaSection() {
  return (
    <section className="w-full bg-white py-12 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="relative bg-[#FFFCF6] shadow-[0_1px_4px_rgba(0,0,0,0.05)] rounded-lg border border-1 border-gray-200/40 overflow-hidden">
          {/* Mobile background image */}
          <div className="absolute inset-0 md:hidden">
            <img src="/images/maskin-cta.png" alt="Surveyor drawing" className="w-full h-full object-cover opacity-20 blur-[2px]" />
          </div>

          <div className="flex flex-col md:flex-row h-[500px] relative">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center z-10">
              <h2 className="mt-6 text-3xl md:text-4xl text-[#010207] mb-4">
              Redo att effektivisera <br />
              maskinarbetet?
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-lg mb-6">
              Oavsett om du behöver en komplett lösning från modell till utrustning – eller vill digitalisera delar av din maskinpark – hjälper vi dig att arbeta smartare, säkrare och mer exakt.
              </p>
              <button className="inline-flex items-center gap-2 bg-[#E88026] text-white text-[15px] px-6 py-3 rounded-xl hover:bg-[#d46f1c] transition w-fit">
                Kostnadsfri offert
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>

            <div className="hidden md:block flex-shrink-0 pr-10">
              <img
                src="/images/maskin-cta.png"
                alt="Surveyor drawing"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
