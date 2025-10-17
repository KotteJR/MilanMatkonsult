"use client";

import { ArrowRight } from "lucide-react";

export default function ContactCtaSection() {
  return (
    <section className="max-w-7xl items-center bg-[#FFFCF6] py-16 md:py-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-8">
        <div>
          <h2 className="text-[26px] md:text-[32px] font-medium text-[#010207] mb-4">
            Behöver du en teknisk konsult i Skåne?
          </h2>
          <p className="text-[#6B6B6B] leading-relaxed max-w-lg mb-6">
            Oavsett om det gäller ett nybygge, infrastrukturprojekt eller en renovering – vi erbjuder teknisk konsultation som gör skillnad.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#D8843E] text-white text-[15px] px-6 py-3 rounded-xl hover:bg-[#c97732] transition">
            Kostnadsfri offert
            <ArrowRight size={16} strokeWidth={2} />
          </button>
        </div>

        <img
          src="/images/surveyor-illustration.png"
          alt="Surveyor drawing"
          className="w-[320px] md:w-[380px]"
        />
      </div>
    </section>
  );
}
