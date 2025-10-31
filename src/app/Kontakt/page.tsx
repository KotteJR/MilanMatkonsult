import ContactSection from "./ContactSection";
import MapSection from "./MapSection";
import Footer from "../Components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakta Oss | Milan Mätkonsult AB - Malmö, Skåne",
  description: "Kontakta Milan Mätkonsult AB i Malmö, Skåne. Amiralsgatan 25, 211 55 Malmö. Ring +46 40 123 45 eller skicka e-post. Kostnadsfri offert.",
  keywords: ["kontakt mätingenjör malmö", "ring mätteknik skåne", "kontakta mätföretag", "offert mätingenjör"],
  openGraph: {
    title: "Kontakta Oss | Milan Mätkonsult AB - Malmö",
    description: "Kontakta oss för kostnadsfri offert. Milan Mätkonsult AB, Amiralsgatan 25, Malmö.",
  },
};

export default function Kontakt () {
    return (
      <div>
        <ContactSection />
        <MapSection />
        <Footer />
      </div>
    );
  }
