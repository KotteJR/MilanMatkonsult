import Hero from "./Hero";
import DroneWorkflowSection from "./DroneWorkflowSection";
import { DroneIntroSection } from "./DroneIntroSection";
import ContactCTASection from "./ContactCTASection";
import { DroneFeaturesSection } from "./DroneFeaturesSection";
import ContactSection from "./ContactSection";
import { TechnicalServicesSection } from "./WhyUs";
import FAQSection from "./FAQSection";
import Footer from "../Components/Footer";

export default function DronarScanning() {
  return (
    <div>
      <Hero />
      <DroneIntroSection />
      <DroneWorkflowSection />
      <DroneFeaturesSection />
      <TechnicalServicesSection />
      <FAQSection />
      <ContactCTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}