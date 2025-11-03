import Hero from "./Hero";
import Footer from "../Components/Footer";
import ContactSection from "./ContactSection";
import { MaskinIntroSection } from "./MaskinIntroSection";
import MaskinStyrningServices from "./MaskinStyrningServices";
import { MaskinFeaturesSection } from "./MaskinFeaturesSection";
import ContactCtaSection from "./ContactCTASection";
import FAQSection from "./FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maskinstyrning Skåne, Malmö | Milan Mätkonsult AB",
  description: "Maskinstyrning i Skåne och Malmö. Grävmaskiner, hjullastare och bandschaktare med millimeterprecision. Erfaren maskinstyrningstjänst.",
  keywords: ["maskinstyrning skåne", "maskinstyrning malmö", "grävmaskinstyrning", "hjullastarstyrning", "3d modell maskin", "maskinpositionering"],
  openGraph: {
    title: "Maskinstyrning Skåne, Malmö | Milan Mätkonsult AB",
    description: "Maskinstyrning för grävmaskiner och hjullastare i Skåne. Millimeterprecision med 3D-modeller.",
  },
  alternates: {
    canonical: '/MaskinStyrning',
  },
};

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
