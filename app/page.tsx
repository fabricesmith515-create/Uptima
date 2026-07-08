import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Probleme from "@/components/Probleme";
import Services from "@/components/Services";
import Difference from "@/components/Difference";
import Methode from "@/components/Methode";
import Realisations from "@/components/Realisations";
import Technologies from "@/components/Technologies";
import Temoignages from "@/components/Temoignages";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Probleme />
        <Services />
        <Difference />
        <Methode />
        <Realisations />
        <Technologies />
        <Temoignages />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
