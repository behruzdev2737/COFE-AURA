import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { StorySection } from "@/components/StorySection";
import { MenuSection } from "@/components/MenuSection";
import { ShopSection } from "@/components/ShopSection";
import { BrewingGuide } from "@/components/BrewingGuide";
import { LocationsSection } from "@/components/LocationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ReservationSection } from "@/components/ReservationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Navbar />
      <HeroSection />
      <Marquee />
      <StorySection />
      <MenuSection />
      <ShopSection />
      <BrewingGuide />
      <TestimonialsSection />
      <LocationsSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}
