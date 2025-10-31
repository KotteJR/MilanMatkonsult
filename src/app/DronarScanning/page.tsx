import Hero from "./Hero";
import DroneWorkflowSection from "./DroneWorkflowSection";
import { DroneIntroSection } from "./DroneIntroSection";
import ContactCTASection from "./ContactCTASection";
import { DroneFeaturesSection } from "./DroneFeaturesSection";
import ContactSection from "./ContactSection";
import { TechnicalServicesSection } from "./WhyUs";
import FAQSection from "./FAQSection";
import Footer from "../Components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drönarscanning Skåne, Malmö | Milan Mätkonsult AB",
  description: "Drönarscanning i Skåne och Malmö. Punktmoln, ortofoton, 3D-modeller och DWG-ritningar. Professionell mätteknik med drönare. Kostnadsfri offert.",
  keywords: ["drönarscanning skåne", "drönarscanning malmö", "drönarmätning", "punktmoln", "ortofoto", "3d skanning drönare", "dwg ritningar"],
  openGraph: {
    title: "Drönarscanning Skåne, Malmö | Milan Mätkonsult AB",
    description: "Professionell drönarscanning i Skåne och Malmö. Punktmoln, ortofoton, 3D-modeller och DWG-ritningar.",
  },
};

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