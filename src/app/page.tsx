import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";
import ToolsSection from "@/components/ToolsSection";
import CertificationsSection from "@/components/CertificationsSection";
import BeyondCodeSection from "@/components/BeyondCodeSection";
import FinalVisualSection from "@/components/FinalVisualSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryCards />
        <AboutSection />
        <ExperienceSection />
        <ToolsSection />
        <WorkSection />
        <CertificationsSection />
        <BeyondCodeSection />
        <FinalVisualSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
