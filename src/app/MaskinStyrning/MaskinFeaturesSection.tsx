"use client";

import { Compass, Settings, Truck, Shield } from "lucide-react";

export function MaskinFeaturesSection() {
  const features = [
    {
      icon: Compass,
      title: "Exakt maskinrörelse baserat på verkliga modeller",
    },
    {
      icon: Settings,
      title: "Kompatibel med alla maskintyper",
    },
    {
      icon: Truck,
      title: "Montering och driftsättning på plats",
    },
    {
      icon: Shield,
      title: "Erfarenhet från projekt i hela landet sedan 2011",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div className="flex flex-col justify-between h-full">
            <div>
              {/* Tag */}
              <div className="flex items-center justify-center md:justify-start mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-500 text-xs tracking-[0.15em] uppercase">
                  <span className="h-1 w-1 rounded-full bg-gray-400/70" />
                  Vad du får med våra modeller
                  <span className="h-1 w-1 rounded-full bg-gray-400/70" />
                </span>
              </div>

              {/* Headings */}
              <h2 className="text-3xl mt-6 md:text-4xl font-medium text-[#010207] leading-snug md:text-left text-center">
                Rätt från första <br/> skoptaget 
              </h2>
            </div>

            <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[#A0A0A0] md:max-w-md md:text-left text-center">
            Från planering till slutlig utjämning säkerställer vår maskinstyrningstjänst snabbare, mer precisa och fullt understödda operationer i varje steg av processen.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-end items-center md:items-end">
            <div className="max-w-fit mx-auto md:mx-0 md:ml-auto">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-5 mt-8">
                   
                    <div className="flex-1">
                      <Icon size={20} strokeWidth={1.6} className="text-gray-600 mb-3" />
                      <h3 className="text-base text-[#010207] mb-0.2">
                        {feature.title}
                      </h3>

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