"use client";

import { ShieldCheck, BadgeCheck, Award } from "lucide-react";

export default function CertificationsSection() {
  const cards = [
    {
      icon: <ShieldCheck size={28} strokeWidth={1.6} />,
      title: "Klass A-behörighet enligt mätningskungörelsen (SFS 1974:339)",
      image: "/images/hero.png",
    },
    {
      icon: <BadgeCheck size={28} strokeWidth={1.6} />,
      title: "Trafikverkets tillsynsområde – fullständig kompetens",
      image: "/images/cert2.jpg",
    },
    {
      icon: <Award size={28} strokeWidth={1.6} />,
      title: "Över 20 års erfarenhet av kommunala och privata projekt",
      image: "/images/cert3.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-[28px] md:text-[34px] font-medium text-[#010207] mb-10">
          Certifieringar & behörighet
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-[#FFFCF6] rounded-xl p-8 text-left flex flex-col gap-4"
            >
              <span className="text-[#D8843E]">{c.icon}</span>
              <p className="text-[#010207] text-[16px] leading-relaxed">
                {c.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}