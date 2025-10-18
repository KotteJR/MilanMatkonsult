"use client";

import { ArrowRight } from "lucide-react";

export default function ContactCtaSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="bg-[#FFFCF6] shadow-[0_1px_4px_rgba(0,0,0,0.05)] rounded-lg border border-1 border-gray-200/40 overflow-hidden">
          <div className="flex h-[500px]">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-[32px] text-[#010207] mb-4">
                Behöver du en teknisk <br />
                konsult i Skåne?
              </h2>
              <p className="text-gray-700/80 leading-relaxed max-w-lg mb-6">
                Oavsett om det gäller ett nybygge, infrastrukturprojekt eller en renovering – vi erbjuder teknisk konsultation som gör skillnad. Kontakta oss idag för rådgivning eller offert.
              </p>
              <button className="inline-flex items-center gap-2 bg-[#E88026] text-white text-[15px] px-6 py-3 rounded-xl hover:bg-[#d46f1c] transition w-fit">
                Kostnadsfri offert
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>

            <div className="flex-shrink-0">
              <img
                src="/images/CTAteknisk.png"
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
