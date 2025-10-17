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
    image: "/services/laserskanning.jpg",
  },
  {
    title: "Drönarmätning",
    description:
      "Flygfotografering och fotogrammetri med hög precision.",
    image: "/services/dronarmatning.jpg",
  },
  {
    title: "Teknisk konsultation",
    description:
      "Rådgivning och teknisk support genom hela byggprocessen.",
    image: "/services/konsultation.jpg",
  },
  {
    title: "Maskinstyrning",
    description:
      "Effektiv mätning och utsättning med moderna maskinstyrsystem.",
    image: "/services/maskinstyrning.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gray-500">
            <span className="h-1 w-1 rounded-full bg-gray-400/70" />
            <span className="px-3 py-1 rounded-md bg-gray-100/80 text-gray-500">
              Tjänster
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-400/70" />
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-semibold text-[#010207]">
            Teknisk expertis
            <br className="hidden md:block" /> i varje skede
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-gray-500">
            Vi kombinerar modern utrustning med lång erfarenhet för att leverera
            pålitliga mätlösningar för bygg, mark och infrastruktur.
          </p>
        </div>

        {/* Scrollable card row */}
        <div className="flex overflow-x-auto gap-6 pb-2 snap-x snap-mandatory scrollbar-hide">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="relative flex-none w-[340px] md:w-[400px] lg:w-[450px] h-[500px] rounded-xl overflow-hidden snap-start group"
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200 leading-snug">
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
