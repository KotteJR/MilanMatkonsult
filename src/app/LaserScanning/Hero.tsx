"use client";

import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      <div className="relative grid md:grid-cols-2 h-full max-w-7xl mx-auto items-center">
        {/* LEFT SIDE */}
        <div className="px-6 md:px-8 lg:px-12 z-10 flex flex-col justify-center h-full">
          <h1 className="text-[38px] md:text-[44px] text-[#010207] leading-tight mb-6">
            Laserskanning
          </h1>
          <p className="text-[#6B6B6B] text-[18px] leading-relaxed max-w-md mb-8">
          Med avancerad laserscanning erbjuder vi högprecisionstjänster som möjliggör detaljrik 3D-dokumentation 
          och effektiv datainsamling för alla typer av bygg- och anläggningsprojekt.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button className="inline-flex items-center gap-2 bg-[#D8843E] text-white text-[15px] px-6 py-3 rounded-xl hover:bg-[#c97732] transition">
              Kontakta oss
              <Phone size={16} strokeWidth={2} />
            </button>

            <button className="inline-flex items-center gap-2 text-[#D8843E] text-[15px] hover:underline transition">
              Kostnadsfri offert
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — image sits on bottom edge, flush right */}
        <div className="relative flex items-end justify-end h-full md:mr-[calc(-1*(100vw-100%)/2)] w-[calc(50vw+((100vw-100%)/2))]">
          <div className="relative w-full h-[70%] md:h-[93%]">
            <Image
              src="/images/hero.png" // change to your image
              alt="Teknisk konsult på arbetsplats"
              fill
              priority
              className="object-cover rounded-l-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
