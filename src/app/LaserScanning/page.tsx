import Hero from "./Hero";
import Footer from "../Components/Footer";
import LaserWorkflowSection from "./LaserWorkflowSection";
import LaserBenefitsSection from "./LaserBenefitsSection";
import FAQSection from "./FAQSection";
import ContactCtaSection from "./ContactCTASection";
import ContactSection from "./ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laserskanning Skåne, Malmö | Milan Mätkonsult AB",
  description: "Laserskanning i Skåne och Malmö. Högprecisionstjänster med 3D-laserskanning för bygg- och anläggningsprojekt. Erfaren mätteknik sedan 2005.",
  keywords: ["laserskanning skåne", "laserskanning malmö", "3d laserskanning", "laserscanning", "3d skanning byggnad", "leica scannerskanning"],
  openGraph: {
    title: "Laserskanning Skåne, Malmö | Milan Mätkonsult AB",
    description: "Högprecisionstjänster med laserskanning i Skåne och Malmö. 3D-dokumentation för bygg- och anläggningsprojekt.",
  },
};

export default function TekniskKonsult() {
  return (
    <div>
    <Hero />
    <LaserWorkflowSection />
    <LaserBenefitsSection />
    <FAQSection />
    <ContactCtaSection />
    <ContactSection />
    <Footer />
    </div>
  );
}