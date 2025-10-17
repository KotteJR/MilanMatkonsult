import Hero from "./Hero";
import Footer from "../Components/Footer";
import LaserWorkflowSection from "./LaserWorkflowSection";
import LaserBenefitsSection from "./LaserBenefitsSection";
import FAQSection from "./FAQSection";

export default function TekniskKonsult() {
  return (
    <div>
    <Hero />
    <LaserWorkflowSection />
    <LaserBenefitsSection />
    <FAQSection />
    <Footer />
    </div>
  );
}