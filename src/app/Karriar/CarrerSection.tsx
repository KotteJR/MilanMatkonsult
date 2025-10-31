"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CareersSection() {
  const jobs = [
    {
      title: "Mättekniker – Malmö",
      bullets: [
        "Utför precisionsmätningar på byggarbetsplatser och infrastrukturprojekt.",
        "Samarbeta med kunder i hela Skåne-regionen.",
        "Använd avancerade verktyg som totalstationer, GPS och laserskannrar.",
      ],
    },
    {
      title: "Junior GIS-specialist – Skåne",
      bullets: [
        "Stöd i kartläggning, dataanalys och visualisering.",
        "Integrera data från drönare och skannrar i GIS-system.",
        "Arbeta tillsammans med erfarna seniora konsulter i fält.",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="mt-6 text-3xl md:text-4xl font-medium text-[#010207] mb-12">
          Lediga tjänster
        </h2>

        {/* Top job cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="bg-[#FFFCF6] p-8 shadow-[0_1px_4px_rgba(0,0,0,0.05)] rounded-lg border border-1 border-gray-200/40 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-gray-700 text-xl mb-3">{job.title}</h3>
                <ul className="text-[15px] text-gray-700/80 space-y-3">
                  {job.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1 h-1 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="bg-gradient-to-r from-[#E88026] to-[#d46f1c] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:from-[#d46f1c] hover:to-[#c55a0a] transition">
                  Läs mer <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Internship Section */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/praktikant.png"
              alt="Praktikprogram"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-start">
              <div className="w-1 h-6 bg-[#E88026]/90 rounded-full mr-4 mt-1"></div>
              <div className="flex-1">
                <h3 className="text-[22px] font-medium mb-3 mt-1 text-gray-700">
                  Praktikprogram
                </h3>

                <ul className="text-[15px] text-gray-500/80 space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-500/80 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Praktiskt program på 3–6 månader inom mätning och datahantering.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-500/80 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Mentorskap, utbildning i verktyg och erfarenhet från verkliga projekt.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-500/80 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Perfekt för studenter eller nyutexaminerade inom geoteknik eller civilingenjörsvetenskap.</span>
                  </li>
                </ul>

                <h4 className="mt-5 mb-2 font-medium text-gray-700">
                  Vad du får
                </h4>
                <ul className="text-[15px] text-gray-500/80 space-y-3">
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-500/80 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Erfarenhet: Inom infrastruktur-, bygg- eller miljöprojekt.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-500/80 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Teknisk utbildning: I programvara som AutoCAD, GIS eller LiDAR.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1 h-1 bg-gray-500/80 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Fältarbete: Deltagande i mätningar och datainsamling.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}