"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { CoffeeCup3D } from "./CoffeeCup3D";
import { Suspense } from "react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-coffee-700/50 via-coffee-900 to-coffee-900 z-0" />

      {/* Left Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-start mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 mt-10 md:mt-0">
            Awaken Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-cream">
              Senses.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-accent-cream/70 max-w-md mb-8 font-light"
        >
          Experience the finest artisanal coffee, carefully roasted to
          perfection. A symphony of deep espresso notes and velvety textures
          awaits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-4"
        >
          <button
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-accent-gold text-coffee-900 px-8 py-4 rounded-full font-bold tracking-widest hover:bg-accent-cream transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(245,245,240,0.6)]"
          >
            EXPLORE MENU
          </button>
        </motion.div>
      </div>

      {/* Right 3D Canvas */}
      <div className="relative z-10 flex-1 h-[50vh] md:h-full w-full">
        <Canvas camera={{ position: [0, 1, 6], fov: 45 }}>
          <Suspense fallback={null}>
            <CoffeeCup3D />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
