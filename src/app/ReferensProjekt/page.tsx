import type { Metadata } from "next";
import ProjectsGridSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "Referensprojekt | Milan Mätkonsult AB",
  description: "Se våra referensprojekt inom mätteknik, laserskanning, drönarscanning och maskinstyrning i Skåne. Milan Mätkonsult AB har levererat projekt för kommuner, byggföretag och konsulter.",
  keywords: ["referensprojekt mätteknik", "laserskanning projekt skåne", "drönarscanning projekt malmö", "maskinstyrning referenser"],
  alternates: {
    canonical: '/ReferensProjekt',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: '/ReferensProjekt',
    siteName: 'Milan Mätkonsult AB',
    title: 'Referensprojekt | Milan Mätkonsult AB',
    description: 'Se våra referensprojekt inom mätteknik, laserskanning, drönarscanning och maskinstyrning i Skåne.',
    images: [
      {
        url: '/images/aboutus.png',
        width: 1200,
        height: 630,
        alt: 'Milan Mätkonsult AB - Referensprojekt',
      },
    ],
  },
};

export default function ReferensProjekt() {
    return (
      <div>
        <ProjectsGridSection />
        <ContactSection />
        <Footer />
      </div>
    );
  }


  