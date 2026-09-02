"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Droplets, Flame, Search, Timer } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "The Grind",
    icon: <Search className="w-6 h-6" />,
    description:
      "Precision is everything. We grind our single-origin beans just seconds before brewing to ensure zero oxidation. The burr grinder is calibrated to a specific micron size depending on the ambient humidity and roast profile.",
  },
  {
    id: 2,
    title: "The Tamp",
    icon: <Droplets className="w-6 h-6" />,
    description:
      "Applying exactly 30 pounds of pressure creates a perfectly level puck. This ensures water flows evenly through the coffee bed, extracting every nuanced flavor note without channeling.",
  },
  {
    id: 3,
    title: "The Extraction",
    icon: <Timer className="w-6 h-6" />,
    description:
      "Water heated to precisely 93°C is forced through the grounds at 9 bars of pressure. The first drops resemble warm honey, rich in crema, capturing the brightest acids and deepest sugars.",
  },
  {
    id: 4,
    title: "The Pour",
    icon: <Flame className="w-6 h-6" />,
    description:
      "For milk beverages, we steam micro-foam until it reaches a silky, velvet texture. The pour integrates the milk and espresso, culminating in our signature latte art.",
  },
];

export function BrewingGuide() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 px-6 md:px-20 bg-[#0B0806] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Interactive Nav */}
        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-serif text-4xl text-accent-cream mb-4">
              The Art of Brewing
            </h2>
            <div className="w-16 h-1 bg-accent-gold rounded-full mb-6" />
            <p className="text-accent-cream/60 font-light">
              Every cup is a scientific masterpiece. Explore our process.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                    isActive
                      ? "bg-accent-gold text-coffee-900 shadow-lg scale-105"
                      : "bg-[#110D0B] text-accent-cream/60 border border-white/5 hover:border-accent-gold/30 hover:text-accent-cream"
                  }`}
                >
                  <div
                    className={`p-2 rounded-full ${isActive ? "bg-coffee-900/10" : "bg-white/5"}`}
                  >
                    {step.icon}
                  </div>
                  <span className="font-serif text-xl font-medium">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Content Display */}
        <div className="w-full lg:w-2/3 h-full min-h-[300px] flex items-center relative">
          {/* Decorative wireframe circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-accent-gold/10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-accent-gold/5 pointer-events-none" />

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[#1C1614] border border-white/10 p-10 md:p-16 rounded-3xl relative z-10 w-full shadow-2xl"
          >
            <div className="text-accent-gold mb-6 opacity-50">
              <span className="font-mono text-6xl font-bold">
                0{steps[activeStep].id}
              </span>
            </div>
            <h3 className="font-serif text-3xl text-accent-cream mb-6">
              {steps[activeStep].title}
            </h3>
            <p className="text-accent-cream/80 text-lg md:text-xl font-light leading-relaxed">
              {steps[activeStep].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
