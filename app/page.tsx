import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WerkwijzeTeaser from "@/components/WerkwijzeTeaser";
import ContactGrid from "@/components/ContactGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WerkwijzeTeaser />
      <ContactGrid />
      <Footer />
    </main>
  );
}
