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