"use client";

import Image from "next/image";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export default function Topbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-6 md:px-8 lg:px-12 py-3 gap-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/logos/logo.svg"
            alt="Milan Mätkonsult Logo"
            width={140}
            height={32}
            className="object-contain"
            priority
          />
        </div>

        {/* Right: Contact Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Location Button (hidden on mobile) */}
          <button className="hidden sm:flex items-center gap-2 rounded-xl bg-[#E88026] text-white p-[2px] pr-2 hover:bg-[#cf660d] transition">
            <div className="flex items-center bg-white text-[#E88026] rounded-lg py-2 px-3 gap-2">
              <MapPin size={16} strokeWidth={2} />
              <span className="text-sm font-medium">
                Borrgatan 6, 211 24 Malmö · 211 59 Malmö
              </span>
            </div>
            <ArrowRight size={16} strokeWidth={2} />
          </button>

          {/* Phone Button */}
          <button className="flex items-center gap-2 rounded-xl bg-[#E88026] text-white p-[2px] pr-2 hover:bg-[#cf660d] transition">
            <div className="flex items-center bg-white text-[#E88026] rounded-lg py-2 px-3 gap-2">
              <Phone size={16} strokeWidth={2} />
              <span className="text-sm font-medium">+46 735 13 31 65</span>
            </div>
            <ArrowRight size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
