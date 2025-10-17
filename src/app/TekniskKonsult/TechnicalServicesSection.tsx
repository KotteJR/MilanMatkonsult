"use client";

import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Utsättning & inmätning",
    desc: "För hus, väg, anläggning – grov och fin",
    image: "/images/service-1.jpg",
  },
  {
    id: "02",
    title: "Volymberäkning",
    desc: "Noggranna mängdberäkningar för byggskeden",
    image: "/images/service-2.jpg",
  },
  {
    id: "03",
    title: "Projekteringsunderlag",
    desc: "Punktmoln, koordinater och tekniska ritningar",
    image: "/images/service-3.jpg",
  },
  {
    id: "04",
    title: "Relationshandlingar",
    desc: "Sammanställningar för dokumentation och uppföljning",
    image: "/images/service-4.jpg",
  },
  {
    id: "05",
    title: "Lägeskontrollmätning",
    desc: "Säkerställ korrekt byggposition",
    image: "/images/service-5.jpg",
  },
  {
    id: "06",
    title: "Teknisk rådgivning",
    desc: "Praktisk support från behöriga experter",
    image: "/images/service-6.jpg",
  },
];

export default function TechnicalServicesSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-[28px] md:text-[34px] font-medium text-[#010207] mb-10">
          Vad vi erbjuder som <br /> teknisk konsult
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* text */}
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-xs text-gray-300 mb-1">{item.id}</p>
                <h3 className="text-[17px] font-medium mb-1">{item.title}</h3>
                <p className="text-[14px] text-gray-200 leading-snug max-w-[90%]">
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