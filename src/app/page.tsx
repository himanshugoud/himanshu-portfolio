import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CategoryCards />
      <AboutSection />
    </main>
  );
}
