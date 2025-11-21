import type { Metadata } from "next";
import Hem from "./Hem/page";

export const metadata: Metadata = {
  title: "Milan Mätkonsult AB | Mätingenjör Skåne, Malmö | Laserskanning & Drönarscanning",
  description: "Mätingenjör i Skåne, Malmö. Milan Mätkonsult AB erbjuder laserskanning, drönarscanning, maskinstyrning och teknisk konsultation. Erfaren mätteknik i Skåne sedan 2005.",
  keywords: ["mätingenjör skåne", "mätingenjör malmö", "mätingenjör sverige", "laserskanning skåne", "drönarscanning malmö", "maskinstyrning skåne", "mätteknik skåne", "utstyrning malmö", "totalstation skåne", "3d skanning malmö"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: '/',
    siteName: 'Milan Mätkonsult AB',
    title: 'Milan Mätkonsult AB | Mätingenjör Skåne, Malmö',
    description: 'Mätingenjör i Skåne, Malmö. Erbjuder laserskanning, drönarscanning, maskinstyrning och teknisk konsultation.',
    images: [
      {
        url: '/images/aboutus.png',
        width: 1200,
        height: 630,
        alt: 'Milan Mätkonsult AB - Mätingenjör Skåne',
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <Hem />
    </div>
  );
}