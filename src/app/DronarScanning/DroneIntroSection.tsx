"use client";

export function DroneIntroSection() {
  return (
    <section className="w-full bg-white py-12 md:py-18 md:mt-0 mt-8">
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
          <h2 className="text-3xl md:text-4xl font-medium text-[#010207]">
            Effektiv mätning från luften – <br className="hidden md:block" /> utan att kompromissa med <br className="hidden md:block" /> noggrannhet
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex md:flex-row flex-col gap-8 md:gap-14 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-between h-[400px] flex-1">
            {/* First Paragraph with Orange Accent */}
            <p className="relative text-gray-700/80 text-[16px] leading-relaxed">
              Drönarscanning är en snabb och exakt metod för att samla in geografisk data. Med hjälp av Leica Aibotix och högupplöst kamera kan vi skapa <a href="/DronarScanning" className="text-[#E88026] hover:underline">punktmoln</a>, <a href="/DronarScanning" className="text-[#E88026] hover:underline">ortofoton</a>, DWG-ritningar och digitala tvillingar.
            </p>
            {/* Second Paragraph (desktop/tablet only) */}
            <p className="hidden md:block text-gray-500/80 text-base leading-relaxed">
              Perfekt för svårtillgängliga områden, stora platser eller projekt med snäva tidsramar: drönarskanning garanterar data av hög kvalitet med minimal störning på platsen. Läs även om vår <a href="/LaserScanning" className="text-[#E88026] hover:underline">laserskanning</a> och <a href="/MaskinStyrning" className="text-[#E88026] hover:underline">maskinstyrning</a>.
            </p>
          </div>

          {/* Right Column - Video (replaces image) */}
          <div className="flex-1 h-[400px] rounded-xl overflow-hidden">
            <video
              className="w-full h-full object-cover object-left"
              autoPlay
              muted
              playsInline
              loop
              poster="/videos/dronar-video.png"
            >
              <source src="/videos/dronar-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Second Paragraph (mobile only, placed after video) */}
          <p className="md:hidden text-gray-500/80 text-[12px] leading-relaxed mt-2">
            Perfekt för svårtillgängliga områden, stora platser eller projekt med snäva tidsramar: drönarskanning garanterar data av hög kvalitet med minimal störning på platsen. Se även <a href="/LaserScanning" className="text-[#E88026] hover:underline">laserskanning</a> och <a href="/MaskinStyrning" className="text-[#E88026] hover:underline">maskinstyrning</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
