"use client";

type Service = {
  title: string;
  description: string;
  image: string;
};

const SERVICES: Service[] = [
  {
    title: "Laserskanning",
    description:
      "Exakta 3D-modeller med hjälp av avancerad laserskanningsteknik.",
    image: "/images/laserskanning.png",
  },
  {
    title: "Drönarmätning",
    description:
      "Flygfotografering och fotogrammetri med hög precision.",
    image: "/images/dronarmatning1.png",
  },
  {
    title: "Teknisk konsultation",
    description:
      "Rådgivning och teknisk support genom hela byggprocessen.",
    image: "/images/tekniskkonsultation1.png",
  },
  {
    title: "Maskinstyrning",
    description:
      "Effektiv mätning och utsättning med moderna maskinstyrsystem.",
    image: "/images/maskinstyrning1.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-gray-500">
            <span className="px-3 py-1 rounded-md bg-gray-100/80 text-gray-500 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-400/70" />
              Tjänster
              <span className="h-1 w-1 rounded-full bg-gray-400/70" />
            </span>
          </div>

          <h2 className="mt-6 text-[34px] text-[#010207]">
            Teknisk expertis
            <br className="hidden md:block" /> i varje skede
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-gray-500">
            Vi kombinerar modern utrustning med lång erfarenhet <br />
            för att leverera pålitliga mätlösningar för bygg, mark <br /> och infrastruktur.
          </p>
        </div>

        {/* Scrollable card row */}
        <div className="flex overflow-x-auto gap-6 pb-2 snap-x snap-mandatory scrollbar-hide">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="relative flex-none w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] aspect-[3/4] rounded-lg overflow-hidden snap-start"
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

              {/* Text content */}
              <div className="absolute bottom-5 left-5 text-white z-20">
                <h3 className="text-[17px] font-medium mb-1">
                  {service.title}
                </h3>
                <p className="text-[14px] text-white leading-snug max-w-[90%]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
