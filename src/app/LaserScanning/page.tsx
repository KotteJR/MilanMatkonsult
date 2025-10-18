import Hero from "./Hero";
import Footer from "../Components/Footer";
import LaserWorkflowSection from "./LaserWorkflowSection";
import LaserBenefitsSection from "./LaserBenefitsSection";
import FAQSection from "./FAQSection";
import ContactCtaSection from "./ContactCTASection";
import ContactSection from "./ContactSection";

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