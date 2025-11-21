import type { Metadata } from "next";
import HeroSection from "./Hero";
import CarrerSection from "./CarrerSection";
import Footer from "../Components/Footer";
import CareersSection from "./CarrerSection";
import ContactSection from "./ContactSection";

export const metadata: Metadata = {
  title: "Karriär | Milan Mätkonsult AB",
  description: "Sök jobb hos Milan Mätkonsult AB. Vi söker mättekniker, mätingenjörer och konsulter i Skåne. Erfarenhet inom laserskanning, drönarscanning och maskinstyrning är meriterande.",
  keywords: ["jobb mätteknik", "karriär mätingenjör skåne", "lediga tjänster mätteknik malmö", "rekrytering mätteknik"],
  alternates: {
    canonical: '/Karriar',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: '/Karriar',
    siteName: 'Milan Mätkonsult AB',
    title: 'Karriär | Milan Mätkonsult AB',
    description: 'Sök jobb hos Milan Mätkonsult AB. Vi söker mättekniker, mätingenjörer och konsulter i Skåne.',
    images: [
      {
        url: '/images/karriarhero.png',
        width: 1200,
        height: 630,
        alt: 'Milan Mätkonsult AB - Karriär',
      },
    ],
  },
};

export default function Kariar () {
    return (
      <div>
        <HeroSection />
        <CareersSection />
        <ContactSection />
        <Footer />
      </div>
    );
  }
