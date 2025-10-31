"use client";

import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Utsättning & inmätning",
    desc: "För hus, väg, anläggning – grov och fin",
    image: "/images/utsattning.png",
  },
  {
    id: "02",
    title: "Volymberäkning",
    desc: "Noggranna mängdberäkningar för byggskeden",
    image: "/images/volymberakning.png",
  },
  {
    id: "03",
    title: "Projekteringsunderlag",
    desc: "Punktmoln, koordinater och tekniska ritningar",
    image: "/images/projekteringsunderlag.png",
  },
  {
    id: "04",
    title: "Relationshandlingar",
    desc: "Sammanställningar för dokumentation och uppföljning",
    image: "/images/relationshandlingar.png",
  },
  {
    id: "05",
    title: "Lägeskontrollmätning",
    desc: "Säkerställ korrekt byggposition",
    image: "/images/lageskontrollmatning.png",
  },
  {
    id: "06",
    title: "Teknisk rådgivning",
    desc: "Praktisk support från behöriga experter",
    image: "/images/tekniskradgivning.png",
  },
];

export default function TechnicalServicesSection() {
  return (
    <section className="w-full bg-white py-12 md:py-18 mt-6">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="mt-6 text-3xl md:text-4xl font-medium text-[#010207] mb-6">
        Vad vi erbjuder som <br /> teknisk konsult
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg overflow-hidden aspect-[14/9] md:aspect-[3/4]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* text */}
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-xs text-gray-300 mb-1">{item.id}</p>
                <h3 className="text-[17px] font-medium mb-1">{item.title}</h3>
                <p className="text-[14px] text-white leading-snug max-w-[90%]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}