"use client";

export function MaskinIntroSection() {
  return (
    <section className="w-full bg-white md:mt-8 py-20 md:py-18">
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
          <h2 className="text-[34px] text-center text-[#010207] leading-snug">
            Effektiv mätning från luften – <br /> utan att kompromissa med <br /> noggrannhet
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex md:flex-row flex-col gap-8 md:gap-14 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-between h-[400px] flex-1">
            {/* First Paragraph with Orange Accent */}
            <p className="relative text-gray-700/80 text-[18px] leading-relaxed">
            Maskinstyrning innebär att grävmaskiner, hjullastare och bandschaktare arbetar direkt utifrån en exakt 3D-modell. Vår roll är att skapa dessa modeller, verifiera koordinater och säkerställa att maskinen alltid arbetar enligt projektets specifikationer – med millimeterprecision.
            </p>

            {/* Yellow Card */}
            <div className="bg-[#FFFCF6] rounded-xl shadow-sm p-6 border border-gray-200/50">
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
          </div>

          {/* Right Column - Image with 16:9 aspect ratio */}
          <div className="flex-1 h-[400px] rounded-xl overflow-hidden">
            <img
              src="/videos/maskin-video.png"
              alt="-"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
