import type { Metadata } from "next";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "Vanliga frågor | Milan Mätkonsult AB",
  description: "Vanliga frågor om mätteknik, laserskanning, drönarscanning, maskinstyrning och teknisk konsultation. Milan Mätkonsult AB svarar på dina frågor om våra tjänster i Skåne.",
  keywords: ["faq mätteknik", "frågor laserskanning", "frågor drönarscanning", "frågor maskinstyrning"],
  alternates: {
    canonical: '/VanligaFragor',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: '/VanligaFragor',
    siteName: 'Milan Mätkonsult AB',
    title: 'Vanliga frågor | Milan Mätkonsult AB',
    description: 'Vanliga frågor om mätteknik, laserskanning, drönarscanning, maskinstyrning och teknisk konsultation.',
    images: [
      {
        url: '/images/aboutus.png',
        width: 1200,
        height: 630,
        alt: 'Milan Mätkonsult AB - Vanliga frågor',
      },
    ],
  },
};

export default function VanligaFragor() {
  return (
    <div>
      <section className="w-full bg-white py-12 md:py-18">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl md:text-4xl font-medium text-[#010207] mb-6">
            Vanliga frågor
          </h1>
          
          <div className="prose prose-lg max-w-none text-[#4B4B4B] leading-relaxed space-y-8">
            <div>
              <h2 className="text-xl font-medium text-[#010207] mb-2">
                Vilka typer av projekt kan ni hjälpa till med?
              </h2>
              <p className="text-[#4B4B4B] leading-relaxed">
                Inget projekt är för stort eller för litet för oss. Vi arbetar med allt från små bostadsprojekt till stora infrastrukturutvecklingar. Våra tjänster täcker alla huvudområden inom mätteknik.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#010207] mb-2">
                Var är ni verksamma?
              </h2>
              <p className="text-[#4B4B4B] leading-relaxed">
                Vi är baserade i Malmö, Skåne och arbetar främst inom Skåne Sverige. Vi kan även arbeta på projekt i andra regioner vid behov.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#010207] mb-2">
                Vilken utrustning använder ni?
              </h2>
              <p className="text-[#4B4B4B] leading-relaxed">
                Vi är fullt utrustade med drönare, totalstationer, maskinstyrning och 3D-laserskannrar av högsta kvalitet från Leica. All utrustning är modern och välunderhållen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#010207] mb-2">
                Hur snabbt kan ni vara på plats?
              </h2>
              <p className="text-[#4B4B4B] leading-relaxed">
                Vi är flexibla och kan komma ut på arbetsplatserna med kort varsel. Kontakta oss så diskuterar vi dina behov och tidsramar.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#010207] mb-2">
                Vilka leverabler får jag?
              </h2>
              <p className="text-[#4B4B4B] leading-relaxed">
                Beroende på projekt kan vi leverera punktmoln, ortofoton, 3D-modeller, DWG-ritningar och andra digitala ritningar (BIM) anpassade efter dina behov.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#010207] mb-2">
                Hur beställer jag en offert?
              </h2>
              <p className="text-[#4B4B4B] leading-relaxed">
                Du kan kontakta oss via telefon, e-post eller genom vårt kontaktformulär. Vi ger gärna en kostnadsfri offert baserad på dina specifika projektbehov.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

