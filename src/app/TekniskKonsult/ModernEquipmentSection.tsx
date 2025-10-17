"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function ModernEquipmentSection() {
  return (
    <section className="max-w-7xl bg-white py-24 md:py-32 justify-center">
      <div className="mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-8 lg:px-12 ">
        {/* Left Text Box */}
        <div className="bg-[#FFFCF6] rounded-xl p-8 space-y-6">
          <p className="border-l-2 border-[#D8843E] pl-3 text-[#010207] text-[16px]">
            Vi använder Leica MS50, TS30 och TS15 totalstationer samt GPS för maximal precision.
          </p>
          <p className="border-l-2 border-[#D8843E] pl-3 text-[#010207] text-[16px]">
            Databearbetning sker i SBG Geo och AutoCad.
          </p>
          <p className="border-l-2 border-[#D8843E] pl-3 text-[#010207] text-[16px]">
            Vi levererar i valfritt digitalt format – snabbt, exakt och klart att använda.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src="/images/equipment.jpg"
            alt="Leica equipment"
            width={700}
            height={450}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}