"use client";

import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-gray-500 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100/80 text-gray-500">
            <span className="h-1 w-1 rounded-full bg-gray-400/70" />
            <span>Om Oss</span>
            <span className="h-1 w-1 rounded-full bg-gray-400/70" />
          </span>
        </div>

        {/* Main Content */}
        {/* Title above the grid */}
        <h2 className="text-3xl md:text-4xl font-medium text-[#010207] mb-6 md:mb-8">
          Milan Mätkonsult – Sedan 2020
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,520px)_1fr] gap-8 md:gap-14 lg:gap-16">
          {/* Left Image */}
          <div className="rounded-xl overflow-hidden w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[340px] bg-white">
            <img
              src="/images/aboutus.png"
              alt="Milan Mätkonsult"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Text */}
          <div className="max-w-[680px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-[340px] flex flex-col justify-between">
            <div className="space-y-4 md:space-y-5 text-gray-700/90 leading-relaxed">
              <p>
                Milan Mätkonsult är ett familjeföretag baserat i Malmö, grundat av
                Milan Mitrovic 2005. Sedan dess har vi vuxit till ett respekterat
                mätkonsultföretag som levererar projekt över hela Skåne och södra
                Sverige.
              </p>

              <p>
                Vår styrka ligger i att kombinera avancerad teknik med lång erfarenhet
                och personligt ansvar. Med över 20 års erfarenhet i branschen erbjuder
                vi mättjänster som är exakta, pålitliga och anpassade till varje
                projekts unika behov.
              </p>

              <p>
                Vi arbetar nära med kommuner, byggföretag och konsulter för att
                säkerställa att varje bygg- och infrastrukturprojekt genomförs med
                millimeterprecision.
              </p>
            </div>

            <div className="flex justify-end">
              <button className="inline-flex items-center gap-2 bg-[#E88026] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#d46f1c] transition">
                Läs Mer
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
