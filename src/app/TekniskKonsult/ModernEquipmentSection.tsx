"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function ModernEquipmentSection() {
  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-[34px] text-[#010207] text-center mb-12">
          Modern utrustning<br />och metodik
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="flex flex-col h-full justify-between">
            {/* Yellow Card */}
            <div className="bg-[#FFFCF6] p-8 shadow-[0_1px_4px_rgba(0,0,0,0.05)] rounded-lg border border-1 border-gray-200/40 space-y-6">
              <p className="border-l-2 border-[#E88026] pl-3 text-[#010207] text-[16px]">
                Vi använder Leica MS50, TS30 och TS15 totalstationer samt GPS för maximal precision.
              </p>
              <p className="border-l-2 border-[#E88026] pl-3 text-[#010207] text-[16px]">
                Databearbetning sker i SBG Geo och AutoCad.
              </p>
              <p className="border-l-2 border-[#E88026] pl-3 text-[#010207] text-[16px]">
                Vi levererar i valfritt digitalt format – snabbt, exakt och klart att använda.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="bg-[#E88026] text-white px-4 py-2.5 rounded-xl text-sm flex items-center gap-2">
                <Phone size={16} />
                Kontakta oss
              </button>
              <button className="text-[#E88026] px-4 py-2.5 rounded-xl text-sm flex items-center gap-1">
                Kostnadsfri offert <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/images/leica.png"
              alt="Leica equipment"
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}