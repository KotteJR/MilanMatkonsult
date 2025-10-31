import Hero from "./Hero";
import TechnicalServicesSection from "./TechnicalServicesSection";
import ModernEquipmentSection from "./ModernEquipmentSection";
import CertificationsSection from "./CertificationsSection";
import FAQSection from "./FAQSection";
import ContactCtaSection from "./ContactCTASection";
import Footer from "../Components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teknisk Konsultation Skåne, Malmö | Milan Mätkonsult AB",
  description: "Teknisk konsultation inom byggnads- och geoteknik i Skåne. Tjänster till kommuner, byggföretag och privata beställare. Erfaren konsultation sedan 2005.",
  keywords: ["teknisk konsult skåne", "byggnadsgeoteknik malmö", "teknisk konsultation", "byggkonsult skåne", "geoteknik konsult"],
  openGraph: {
    title: "Teknisk Konsultation Skåne, Malmö | Milan Mätkonsult AB",
    description: "Teknisk konsultation inom byggnads- och geoteknik i Skåne. Erfaren konsultation sedan 2005.",
  },
};

export default function TekniskKonsult() {
  return (
    <div>
      <Hero />
      <TechnicalServicesSection />
      <ModernEquipmentSection />
      <CertificationsSection />
      <FAQSection />
      <ContactCtaSection />
      <Footer />
    </div>
  );
}