"use client";

import Image from "next/image";

const services = [
  { id: "01", desc: "Leica Aibotix – stabil, exakt, godkänd för tuffa miljöer", image: "/images/leicadron.png" },
  { id: "02", desc: "Sony Alpha 7R – högupplösta bilder i varje flygning", image: "/images/sonykamera.png" },
  { id: "03", desc: "Bearbetning i Agisoft Metashape – pålitliga underlag", image: "/images/dronprocess.png" },
  { id: "04", desc: "20+ års mätteknisk erfarenhet", image: "/images/dronman.png" },
];

export function TechnicalServicesSection() {
  return (
    <section className="w-full bg-white py-12 md:py-18 mt-6">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-gray-500">
                <span className="px-3 py-1 rounded-md bg-gray-100/80 text-gray-500 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gray-400/70" />
                  Varför välja Milan Mätkonsult?
                  <span className="h-1 w-1 rounded-full bg-gray-400/70" />
                </span>
              </div>
            </div>

            <h2 className="text-center mt-6 text-3xl md:text-4xl font-medium text-[#010207]">
            Teknik, erfarenhet och <br /> leveranssäkerhet  i varje flygning
            </h2>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {services.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg overflow-hidden aspect-[14/9] md:aspect-[3/4]"
            >
              <Image src={item.image} alt={item.id} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-xs text-gray-300 mb-1">{item.id}</p>
                <p className="text-[14px] leading-snug max-w-[90%]">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Bottom right yellow card */}
          <div className="lg:col-start-3 lg:w-[150%] lg:justify-self-end self-end">
            <div className="bg-[#FFFCF6] rounded-xl shadow-sm p-6 flex justify-between items-start">
              <div className="flex items-start flex-1">
                <div className="w-[5px] bg-[#E88026] rounded-lg h-4.5 mr-2 mt-[2px]" />
                <p className="text-[15px] text-[#4B4B4B] leading-relaxed pl-2">
                  Vi anpassar varje flygning efter projektets krav och levererar alla filer snabbt i rätt format. 
                  Oavsett om det handlar om kartor, volymer eller digitala modeller – vi har verktygen och kompetensen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}