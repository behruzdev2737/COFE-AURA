"use client";

import { motion } from "framer-motion";
import { Canvas, useThree } from "@react-three/fiber";
import { CoffeeCup3D } from "./CoffeeCup3D";
import { Suspense } from "react";
import { useAppContext } from "./AppContext";

function ResponsiveScene() {
  const { viewport } = useThree();

  // Tailwind md breakpoint is 768px. In 3D units, this usually corresponds to viewport.width around 4-6 depending on camera distance.
  // We can use a simple threshold or better, use the aspect ratio (width/height).
  // If width < height, it's a portrait mobile screen.
  const isMobile = viewport.width < viewport.height;

  // On Desktop: Text is left, Cup is right. Center of right half is viewport.width / 4.
  // On Mobile: Text is top, Cup is bottom. Center of bottom half is -viewport.height / 4.
  const targetX = isMobile ? 0 : viewport.width / 4;
  const targetY = isMobile ? -viewport.height / 4 : 0;
  // Scale it down a bit on mobile so it doesn't get clipped
  const scale = isMobile ? 0.8 : 1;

  return (
    <group position={[targetX, targetY, 0]} scale={scale}>
      <CoffeeCup3D />
    </group>
  );
}

export function HeroSection() {
  const { t } = useAppContext();

  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden bg-[#0B0806]">
      {/* Crisp background accents instead of blurry gradients */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-b md:bg-gradient-to-l from-[#1C1614] to-transparent z-0 pointer-events-none" />

      {/* Left Content (Text) */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start pt-20 md:pt-0 pointer-events-none text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-accent-cream leading-tight tracking-wide pointer-events-auto"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-accent-cream/70 max-w-md font-light leading-relaxed pointer-events-auto"
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 mt-8 pointer-events-auto"
        >
          <button
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-accent-gold text-coffee-900 px-8 py-4 rounded-full font-bold tracking-widest hover:bg-accent-cream transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            {t("hero.scroll")}
          </button>
        </motion.div>
      </div>

      {/* 3D Canvas Container - ALWAYS Full Screen to track mouse everywhere */}
      <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
        <Canvas shadows camera={{ position: [0, 1.5, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <ResponsiveScene />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
