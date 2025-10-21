"use client";

import { ArrowRight, Box, Link, Headphones } from "lucide-react";

type Service = {
  icon: any;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: ArrowRight,
    title: "Inmätning & analys",
    description:
      "Terrängscanning för att skapa digitalt arbetsunderlag",
  },
  {
    icon: Box,
    title: "Modellering i 2D/3D",
    description:
      "Terrängmodeller från scratch eller från befintlig projekterad data",
  },
  {
    icon: Link,
    title: "Installation av utrustning",
    description:
      "GPS, basstationer och databoxar från Leica & GeoRog",
  },
  {
    icon: Headphones,
    title: "Support & optimering",
    description:
      "Uppföljning, felsökning och anpassning efter behov.",
  },
];

export default function MaskinStyrningServices() {
  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-start mb-4">
            <div className="inline-flex text-xs uppercase tracking-[0.18em] text-gray-500">
              <span className="px-3 py-1 rounded-md bg-gray-100/80 text-gray-500 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gray-400/70" />
                Tjänster inom maskinstyrning
                <span className="h-1 w-1 rounded-full bg-gray-400/70" />
              </span>
            </div>
          </div>

          <h2 className="text-[34px] text-[#010207] leading-tight">
            Helhetslösning från start < br/> till drift
          </h2>
        </div>

        {/* Scrollable card row */}
        <div className="flex overflow-x-auto gap-6 pb-2 snap-x snap-mandatory scrollbar-hide">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.title}
                className="flex-none w-[280px] sm:w-[320px] bg-[#FFFCF6] rounded-xl shadow-sm p-6 border border-gray-200/50 snap-start"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-3">
                  <IconComponent size={20} className="text-[#E88026]" strokeWidth={1.5} />
                  <h3 className="text-[16px] font-medium text-[#010207]">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[14px] text-[#4B4B4B] leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
