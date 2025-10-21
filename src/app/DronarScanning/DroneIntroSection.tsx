"use client";

export function DroneIntroSection() {
  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Tag and Title above the grid */}
        <div className="mb-8 md:mb-12">
          {/* Tag */}
          <div className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-gray-500 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100/80 text-gray-500">
              <span className="h-1 w-1 rounded-full bg-gray-400/70" />
              <span>Vad är Drönar-scanning?</span>
              <span className="h-1 w-1 rounded-full bg-gray-400/70" />
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[34px] text-[#010207] leading-snug">
            Effektiv mätning från luften – <br /> utan att kompromissa med <br /> noggrannhet
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex md:flex-row flex-col gap-8 md:gap-14 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-between h-[400px] flex-1">
            {/* First Paragraph with Orange Accent */}
            <p className="relative text-gray-700/80 text-[16px] leading-relaxed">
              Drönarscanning är en snabb och exakt metod för att samla in geografisk data. Med hjälp av Leica Aibotix och högupplöst kamera kan vi skapa punktmoln, ortofoton, DWG-ritningar och digitala tvillingar.
            </p>

            {/* Second Paragraph */}
            <p className="text-gray-500/80 text-[12px] leading-relaxed">
              Perfekt för svårtillgängliga områden, stora platser eller projekt med snäva tidsramar: drönarskanning garanterar data av hög kvalitet med minimal störning på platsen.
            </p>
          </div>

          {/* Right Column - Image with 16:9 aspect ratio */}
          <div className="flex-1 h-[400px] rounded-xl overflow-hidden">
            <img
              src="/videos/dronar-video.png"
              alt="-"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
