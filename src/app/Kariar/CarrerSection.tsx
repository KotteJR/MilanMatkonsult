"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CareersSection() {
  const jobs = [
    {
      title: "Mensor – Malmö",
      bullets: [
        "Utför precisionsmätningar på byggarbetsplatser och infrastrukturprojekt.",
        "Samarbeta med kunder i hela Skåne-regionen.",
        "Använd avancerade verktyg som totalstationer, GPS och laserskannrar.",
      ],
    },
    {
      title: "Especialista Junior en GIS – Skåne",
      bullets: [
        "Stöd i kartläggning, dataanalys och visualisering.",
        "Integrera data från drönare och skannrar i GIS-system.",
        "Arbeta tillsammans med erfarna seniora konsulter i fält.",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-[34px] font-medium text-[#010207] mb-12">
          Lediga tjänster
        </h2>

        {/* Top job cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-[#FFF8F2] p-8 rounded-xl flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="font-medium text-[#010207] mb-3">{job.title}</h3>
                <ul className="list-disc list-inside text-[15px] text-gray-700 space-y-1">
                  {job.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 text-[#D8843E] flex items-center gap-1 hover:underline">
                Leer más <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Internship Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/internship.jpg"
              alt="Internship program"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-[22px] font-medium mb-3 border-l-2 border-[#D8843E] pl-3">
              Programa de Prácticas
            </h3>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-[15px] mb-6">
              <li>
                Praktiskt program på 3–6 månader inom mätning och
                datahantering.
              </li>
              <li>
                Mentorskap, utbildning i verktyg och erfarenhet från verkliga
                projekt.
              </li>
              <li>
                Perfekt för studenter inom geoteknik eller
                civilingenjörsvetenskap.
              </li>
            </ul>

            <h4 className="mt-5 mb-2 font-medium text-[#010207]">
              Lo que obtendrás
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-[15px]">
              <li>
                Reell erfarenhet: Inom infrastruktur-, bygg- eller
                miljöprojekt.
              </li>
              <li>
                Teknisk utbildning: I programvara som AutoCAD, GIS och LiDAR.
              </li>
              <li>
                Fältarbete: Deltagande i mätningar och datainsamling.
              </li>
            </ul>

            <button className="mt-6 text-[#D8843E] flex items-center gap-1 hover:underline">
              Leer más <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}