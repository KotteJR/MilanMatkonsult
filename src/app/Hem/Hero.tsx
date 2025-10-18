"use client";

import { Phone, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white"
      style={{ 
        backgroundImage: "url('/images/hero.png')",
        height: "calc(100vh - 135px)"
      }}
    >
      <div className="absolute inset-0 bg-black/25" /> {/* subtle overlay */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 h-full flex flex-col items-center justify-center text-center gap-10">
        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-widest text-white/80">
          <span>—</span>
          <span>Certifierade mättekniker</span>
          <span>—</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl leading-tight">
          Mätteknik med <br className="hidden md:block" /> millimeterprecision.
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-xl text-white leading-relaxed">
          Vi hjälper byggare, kommuner och konsulter att fatta rätt beslut –
          med exakt data, moderna verktyg och över 20 års erfarenhet i fält.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {/* Contact button */}
          <button className="flex items-center justify-center gap-2 bg-[#E88026] hover:bg-[#cf660d] text-white font-medium rounded-xl px-6 py-3 transition">
            <span>Kontakta oss</span>
            <Phone size={20} strokeWidth={2} />
          </button>

          {/* Services button */}
          <button className="flex items-center justify-center gap-2 bg-white text-[#E88026] font-medium rounded-xl px-6 py-3 hover:bg-gray-100 transition">
            <span>Se våra tjänster</span>
            <ArrowRight size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
