import type { Metadata } from "next";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "Våra Tjänster | Milan Mätkonsult AB",
  description: "Milan Mätkonsult AB erbjuder omfattande mättekniska tjänster: drönarscanning, laserskanning, maskinstyrning och teknisk konsultation i Skåne, Malmö.",
  keywords: ["mättekniska tjänster skåne", "drönarscanning tjänster", "laserskanning tjänster", "maskinstyrning tjänster", "teknisk konsultation skåne"],
  alternates: {
    canonical: '/VaraTjanster',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: '/VaraTjanster',
    siteName: 'Milan Mätkonsult AB',
    title: 'Våra Tjänster | Milan Mätkonsult AB',
    description: 'Milan Mätkonsult AB erbjuder omfattande mättekniska tjänster: drönarscanning, laserskanning, maskinstyrning och teknisk konsultation.',
    images: [
      {
        url: '/images/aboutus.png',
        width: 1200,
        height: 630,
        alt: 'Milan Mätkonsult AB - Våra Tjänster',
      },
    ],
  },
};

export default function VaraTjanster() {
  return (
    <div>
      <section className="w-full bg-white py-12 md:py-18">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl md:text-4xl font-medium text-[#010207] mb-6">
            Våra Tjänster
          </h1>
          
          <div className="prose prose-lg max-w-none text-[#4B4B4B] leading-relaxed space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-[#A0A0A0]">
              Milan Mätkonsult erbjuder omfattande mättekniska tjänster för bygg- och anläggningsprojekt. Vi är specialiserade på att leverera högprecisionstjänster med modern teknik och erfaren personal.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-medium text-[#010207] mb-3">Drönarscanning</h2>
                <p className="text-[#4B4B4B] leading-relaxed">
                  Med drönarscanning kan vi mäta stora ytor med imponerande precision och effektivitet. Vi levererar punktmoln, ortofoton, 3D-modeller och DWG-ritningar för dina projekt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-[#010207] mb-3">Laserskanning</h2>
                <p className="text-[#4B4B4B] leading-relaxed">
                  Avancerad laserscanning för detaljrik 3D-dokumentation och effektiv datainsamling. Perfekt för bygg- och anläggningsprojekt som kräver hög precision.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-[#010207] mb-3">Maskinstyrning</h2>
                <p className="text-[#4B4B4B] leading-relaxed">
                  Maskinstyrning ger dig full kontroll över terräng och maskiner. Våra tjänster omfattar grävmaskiner, hjullastare och bandschaktare med millimeterprecision.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium text-[#010207] mb-3">Teknisk Konsultation</h2>
                <p className="text-[#4B4B4B] leading-relaxed">
                  Vi erbjuder teknisk konsultation inom byggnads- och geoteknik. Våra tjänster riktar sig till kommuner, byggföretag, konsulter och privata beställare i hela Skåne.
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-[#A0A0A0] mt-8">
              Alla våra tjänster utförs med toppmoderna mätutrustning från Leica och erfaren personal som säkerställer högsta kvalitet i varje projekt.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

