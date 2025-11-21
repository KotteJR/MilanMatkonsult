import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import TrustedClientsSection from "./TrustedClientsSection";
import MapSection from "./MapSection";
import Footer from "../Components/Footer";
import Breadcrumbs from "../Components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om Oss | Milan Mätkonsult AB - Mätingenjör Skåne, Malmö",
  description: "Milan Mätkonsult AB är ett etablerat mätteknikföretag i Malmö, Skåne sedan 2005. Erfaren personal och modern utrustning för alla mättekniska behov.",
  keywords: ["milan mätkonsult", "mätingenjör malmö", "mätteknik skåne", "mätföretag malmö", "team mätingenjör"],
  openGraph: {
    title: "Om Oss | Milan Mätkonsult AB - Mätingenjör Skåne",
    description: "Mätteknikföretag i Malmö, Skåne sedan 2005. Erfaren personal och modern utrustning.",
  },
  alternates: {
    canonical: '/OmOss',
  },
};

export default function Foretag () {
    return (
      <>
        <Breadcrumbs items={[
          { name: "Hem", url: "/" },
          { name: "Om Oss", url: "/OmOss" }
        ]} />
        <div>
          <AboutSection />
          <TrustedClientsSection />
          <TeamSection />
          <MapSection />
          <Footer />
        </div>
      </>
    );
  }