import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CategoryCards />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
    </main>
  );
}
