"use client";

import { MapPin, CalendarDays, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Hyllie Vattenpark",
    description: "Terrängmätning och volymberäkning för landskapsutformning.",
    date: "15 juli 2025",
    location: "Malmö, Sverige",
    image: "/projects/hyllie.jpg",
  },
  {
    title: "Limhamn Kajhus",
    description: "Utsättning och maskinstyrning vid bostadsbygge vid kajkanten.",
    date: "15 juli 2025",
    location: "Malmö, Sverige",
    image: "/projects/limhamn.jpg",
  },
  {
    title: "Hyllie Vattenpark",
    description: "Terrängmätning och volymberäkning för landskapsutformning.",
    date: "15 juli 2025",
    location: "Malmö, Sverige",
    image: "/projects/hyllie.jpg",
  },
  {
    title: "Limhamn Kajhus",
    description: "Utsättning och maskinstyrning vid bostadsbygge vid kajkanten.",
    date: "15 juli 2025",
    location: "Malmö, Sverige",
    image: "/projects/limhamn.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left text (sticky) */}
        <div className="lg:sticky lg:top-32 self-start">
          <h2 className="text-3xl md:text-4xl font-medium text-[#010207] mb-4">
            Ett urval av våra<br />projekt
          </h2>
          <p className="text-gray-500/70 leading-relaxed max-w-md text-lg">
            Utförda mätuppdrag inom bygg, mark och <br /> infrastruktur.
          </p>
        </div>

        {/* Right side list */}
        <div className="flex flex-col gap-10">
          {PROJECTS.map((p, index) => (
            <article
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full md:w-[45%] h-[220px] md:h-auto object-cover"
              />

              {/* Text content */}
              <div className="flex flex-col justify-between p-6 md:w-[55%]">
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-[#010207] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-500/70 text-sm mb-4 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-400/70">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={14} /> {p.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} /> {p.location}
                    </div>
                  </div>
                </div>

                <button className="mt-6 inline-flex items-center gap-2 bg-[#E88026] text-white px-5 py-2.5 rounded-xl text-sm font-medium self-start hover:bg-[#d46f1c] transition">
                  Läs Mer
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
