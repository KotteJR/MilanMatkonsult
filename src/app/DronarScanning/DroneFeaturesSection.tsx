"use client";

import { Globe, Map, Box, Compass } from "lucide-react";

export function DroneFeaturesSection() {
  const features = [
    {
      num: "1",
      icon: Globe,
      title: "Punktmoln",
      desc: "Hög täthet & exakt koordinatsättning",
    },
    {
      num: "2",
      icon: Map,
      title: "Ortofoto",
      desc: "Skalriktiga bilder för planering",
    },
    {
      num: "3",
      icon: Box,
      title: "3D-modell",
      desc: "Enkel visualisering & analys",
    },
    {
      num: "4",
      icon: Compass,
      title: "DWG-ritningar",
      desc: "Redo för CAD och projektering",
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div className="flex flex-col justify-between h-full">
            <div>
              {/* Tag */}
              <div className="inline-flex items-center mb-4">
                <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-500 text-xs tracking-[0.15em] uppercase">
                  <span className="h-1 w-1 rounded-full bg-gray-400/70" />
                  Vad du får med våra modeller
                  <span className="h-1 w-1 rounded-full bg-gray-400/70" />
                </span>
              </div>

              {/* Headings */}
              <h2 className="text-[40px] text-[#010207] leading-tight">
                Exakta modeller. <br /> Rätt beslut.
              </h2>
            </div>

            <p className="text-sm text-gray-400 mt-12">
              Vad du får med våra modeller
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-end items-end">
            <div className="max-w-fit ml-auto">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.num} className="flex items-start gap-5 mt-8">
                    <span className="text-[#E88026] text-lg font-normal w-5 text-right leading-none pt-[1px]">
                      {feature.num}
                    </span>
                    <div className="flex-1">
                      <Icon size={18} strokeWidth={1.6} className="text-gray-600 mb-2" />
                      <h3 className="text-base text-[#010207] mb-0.2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}