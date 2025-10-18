import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import TrustedClientsSection from "./TrustedClientsSection";
import MapSection from "./MapSection";
import Footer from "../Components/Footer";

export default function Foretag () {
    return (
      <div>
        <AboutSection />
        <TrustedClientsSection />
        <TeamSection />
        <MapSection />
        <Footer />
      </div>
    );
  }