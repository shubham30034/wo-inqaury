import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Goals from "./components/Goals";
import Location from "./components/Location";
import Footer from "./components/Footer";
import StickyWhatsAppCTA from "./components/StickyWhatsAppCTA";
import PhotoSection from "./components/PhotoSection";
import GoogleReviews from "./components/GoogleReviews";
import WhoThisIsFor from "./components/WhoThisIsFor";
import Header from "./components/Header";
import TrustStrip from "./components/TrustStrip";

export default function Home() {
  return (
    <main className="bg-background text-foreground">

      <Hero />
      <TrustStrip/>
      <Offer />
      <WhoThisIsFor />
      <Goals />
      <GoogleReviews />
      <PhotoSection />
      <Location />
      <Footer />
      <StickyWhatsAppCTA />
    </main>
  );
}
