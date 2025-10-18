"use client";

import { ShieldCheck, BadgeCheck, Award } from "lucide-react";
import Image from "next/image";

export default function CertificationsSection() {
  const cards = [
    {
      icon: <ShieldCheck size={28} strokeWidth={1.6} />,
      title: "Klass A-behörighet enligt mätningskungörelsen (SFS 1974:339)",
      image: "/images/klassA.png",
    },
    {
      icon: <BadgeCheck size={28} strokeWidth={1.6} />,
      title: "Trafikverkets tillsynsområde – fullständig kompetens",
      image: "/images/trafikverket.png",
    },
    {
      icon: <Award size={28} strokeWidth={1.6} />,
      title: "Över 20 års erfarenhet av kommunala och privata projekt",
      image: "/images/kommunala.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="md:text-[34px] text-[#010207] mb-10">
          Certifieringar & behörighet
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-[#FFFCF6] shadow-[0_1px_4px_rgba(0,0,0,0.05)] rounded-lg border border-1 border-gray-200/40 text-left flex flex-col overflow-hidden"
            >
              <div className="p-8 pb-4">
                <span className="text-gray-600">{c.icon}</span>
                <p className="text-[#010207] text-[16px] leading-relaxed mt-4">
                  {c.title}
                </p>
              </div>
              <div className="w-full">
                <Image
                  src={c.image}
                  alt={c.title}
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}