import Hero from "./Hero";
import TechnicalServicesSection from "./TechnicalServicesSection";
import ModernEquipmentSection from "./ModernEquipmentSection";
import CertificationsSection from "./CertificationsSection";
import ServicesSection from "./ServicesSection";
import FAQSection from "./FAQSection";
import ContactCtaSection from "./ContactCTASection";
import Footer from "../Components/Footer";

export default function TekniskKonsult() {
  return (
    <div>
      <Hero />
      <TechnicalServicesSection />
      <ModernEquipmentSection />
      <CertificationsSection />
      <ServicesSection />
      <FAQSection />
      <ContactCtaSection />
      <Footer />
    </div>
  );
}