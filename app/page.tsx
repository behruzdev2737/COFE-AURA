import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { StorySection } from "@/components/StorySection";
import { MenuSection } from "@/components/MenuSection";
import { LocationsSection } from "@/components/LocationsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col w-full">
      <Navbar />
      <HeroSection />
      <Marquee />
      <StorySection />
      <MenuSection />
      <LocationsSection />
      <Footer />
    </main>
  );
}
