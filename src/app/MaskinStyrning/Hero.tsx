"use client";

import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      className="relative w-full bg-white overflow-hidden py-12 md:py-0"
      style={{ height: "calc(100vh - 135px)" }}
    >
      <div className="relative flex flex-col md:grid md:grid-cols-2 md:h-full max-w-7xl mx-auto items-center">
        {/* LEFT SIDE */}
        <div className="px-6 md:px-8 lg:px-12 z-10 flex flex-col justify-center items-start h-full">
          <h1 className="text-[38px] md:text-[44px] text-[#010207] leading-tight mb-8">
          Maskin-styrning
          </h1>
          <p className="text-[#6B6B6B] text-[18px] leading-relaxed max-w-md mb-8">
          Med vår maskinstyrning får du full kontroll över terräng och maskiner, oavsett om det handlar om grävmaskiner eller hjullastare.
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-8">
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

        {/* MOBILE: Square 1:1 image */}
        <div className="md:hidden w-full aspect-square px-6">
          <div className="relative w-full h-full rounded-t-[12px] overflow-hidden">
            <Image
              src="/images/maskinhero.png"
              alt="Maskinstyrning"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* DESKTOP: RIGHT SIDE — image sits on bottom edge, flush right */}
        <div className="hidden md:flex relative items-end justify-end h-full md:mr-[calc(-1*(100vw-100%)/2)] w-[calc(50vw+((100vw-100%)/2))]">
          <div className="relative w-full h-[70%] md:h-[93%]">
            <Image
              src="/images/maskinhero.png"
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
