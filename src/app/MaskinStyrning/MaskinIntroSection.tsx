"use client";

export function MaskinIntroSection() {
  return (
    <section className="w-full bg-white md:mt-8 py-12 md:py-18 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Tag and Title above the grid */}
        <div className="mb-8 md:mb-12">
          {/* Tag */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex text-xs uppercase tracking-[0.18em] text-gray-500">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100/80 text-gray-500">
                <span className="h-1 w-1  rounded-full bg-gray-400/70" />
              <span>Vad är maskinstyrning?</span>
                <span className="h-1 w-1  rounded-full bg-gray-400/70" />
            </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="mt-6 text-3xl md:text-4xl text-[#010207] leading-snug text-center">
            Effektiv mätning från luften – <br className="hidden md:block" /> utan att kompromissa med <br className="hidden md:block" /> noggrannhet
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex md:flex-row flex-col gap-8 md:gap-14 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col md:flex-col-reverse h-[400px] flex-1 md:justify-between">
            {/* Yellow Card below heading */}
            <div className="bg-[#FFFCF6] rounded-xl shadow-sm p-6 border border-gray-200/50 mt-4 md:mt-0">
              <div className="flex items-start">
                <div className="w-[5px] bg-[#E88026] rounded-lg h-4.5 mr-2 mt-[2px]" />
                <div className="pl-2">
                  <h3 className="text-[18px] text-[#010207] mb-1">
                    Resultatet?
                  </h3>
                  <p className="text-[16px] text-[#4B4B4B] leading-relaxed">
                    Effektivare arbetsflöde, färre fel, och bättre ekonomi.
                  </p>
                </div>
              </div>
            </div>

            {/* Intro Paragraph */}
            <p className="relative mt-8 md:mt-0 max-w-2xl text-base md:text-lg leading-relaxed text-[#A0A0A0]">
            Maskinstyrning innebär att grävmaskiner, hjullastare och bandschaktare arbetar direkt utifrån en exakt 3D-modell. Vår roll är att skapa dessa modeller, verifiera koordinater och säkerställa att maskinen alltid arbetar enligt projektets specifikationer – med millimeterprecision. Läs mer om <a href="/DronarScanning" className="text-[#E88026] hover:underline">drönarscanning</a> och <a href="/LaserScanning" className="text-[#E88026] hover:underline">laserskanning</a> som underlag.
            </p>
          </div>

          {/* Right Column - Video (replaces image) */}
          <div className="flex-1 h-[400px] rounded-xl overflow-hidden md:mt-0 mt-2">
            <video
              className="w-full h-full object-cover object-left"
              autoPlay
              muted
              playsInline
              loop
              poster="/videos/maskin-video.png"
            >
              <source src="/videos/maskin-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
