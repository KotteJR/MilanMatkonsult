"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 relative overflow-hidden">
          {/* Background Image with Fade Effect */}
          <div className="absolute inset-0">
            <div className="relative h-full w-full lg:w-[60%] xl:w-[55%] ml-auto">
              <Image
                src="/images/about.png"
                alt="Milan Mitrovic"
                fill
                className="object-contain sm:object-cover md:object-cover lg:object-cover object-right opacity-100"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 min-h-[400px]">
            {/* Left: Text Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl text-[#010207] mb-4">
                Om oss
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Milan Mätkonsult bildades av Milan Mitrovic i maj 2005, som enskild firma. Efter sommaren 2007 ombildades företaget till ett aktiebolag.
                </p>
                <p>
                  Milan hade sedan tidigare flera års arbetslivserfarenhet som väg-anläggning och husutsättare främst på Skanska Sverige AB, samt en tvåårig anställning på Lantmäteriet, som mät- och kartingenjör.
                </p>
                <p>
                  Efter ett flertal framgångsrika år i branschen började behovet för nya medarbetare att växa fram. Resten är historia. Idag är vi flera heltidsanställda och företaget är en respekterad aktör på marknaden.
                </p>
              </div>
            </div>

            {/* Right: Spacer for layout */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}