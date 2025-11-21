import type { Metadata } from "next";
import Hero from "./Hero";
import StatsSection from "./StatsSection";
import ServicesSection from "./ServicesSection";
import TrustedClientsSection from "./TrustedClientsSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import FAQSection from "./FAQSection";
import MapSection from "./MapSection";
import ContactSection from "./ContactSection";
import Footer from "../Components/Footer";

export const metadata: Metadata = {
  title: "Hem | Milan Mätkonsult AB",
  description: "Mätingenjör i Skåne, Malmö. Milan Mätkonsult AB erbjuder laserskanning, drönarscanning, maskinstyrning och teknisk konsultation. Erfaren mätteknik i Skåne sedan 2005.",
  alternates: {
    canonical: '/Hem',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: '/Hem',
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

export default function Hem() {
  return (
    <div>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <TrustedClientsSection />
      <ProjectsSection />
      <AboutSection />
      <FAQSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
}