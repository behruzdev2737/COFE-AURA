"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The best espresso I've ever had. Period. The Velvet Macchiato completely changed my mornings.",
    author: "Elena R.",
    role: "Coffee Enthusiast",
  },
  {
    id: 2,
    text: "An absolute sanctuary. The minimalist aesthetic combined with perfect roasts makes it my daily escape.",
    author: "James T.",
    role: "Designer",
  },
  {
    id: 3,
    text: "I travel across the city just for their Midnight Espresso. It's a masterclass in coffee roasting.",
    author: "Sarah M.",
    role: "Food Critic",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 md:px-20 bg-[#0B0806] border-y border-white/5 relative overflow-hidden">
      {/* Decorative large quote mark */}
      <Quote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] text-white/5" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-accent-cream mb-16 tracking-wide">
          What Our Guests Say
        </h2>

        <div className="relative h-[250px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full px-12"
            >
              <p className="text-xl md:text-3xl font-light text-accent-cream/80 leading-relaxed italic mb-8">
                "{testimonials[index].text}"
              </p>
              <div>
                <h4 className="font-serif text-xl text-accent-gold">
                  {testimonials[index].author}
                </h4>
                <span className="text-sm text-accent-cream/50 tracking-widest uppercase">
                  {testimonials[index].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent-cream hover:text-accent-gold hover:border-accent-gold/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent-cream hover:text-accent-gold hover:border-accent-gold/50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
