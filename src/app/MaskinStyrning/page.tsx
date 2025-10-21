import Hero from "./Hero";
import Footer from "../Components/Footer";
import ContactSection from "./ContactSection";
import { MaskinIntroSection } from "./MaskinIntroSection";
import MaskinStyrningServices from "./MaskinStyrningServices";
import { MaskinFeaturesSection } from "./MaskinFeaturesSection";
import ContactCtaSection from "./ContactCTASection";
import FAQSection from "./FAQSection";

export default function MaskinStyrning() {
  return (
    <div>
      <Hero />
      <MaskinIntroSection />
      <MaskinStyrningServices />
      <MaskinFeaturesSection />
      <FAQSection />
      <ContactCtaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
