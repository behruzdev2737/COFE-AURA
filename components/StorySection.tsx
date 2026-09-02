"use client";

import { motion } from "framer-motion";
import { Coffee, Sprout, Flame } from "lucide-react";

export function StorySection() {
  const features = [
    {
      icon: <Sprout className="w-8 h-8 text-accent-gold" />,
      title: "Ethically Sourced",
      description:
        "We partner directly with farmers across the globe to ensure fair wages and sustainable farming practices.",
    },
    {
      icon: <Flame className="w-8 h-8 text-accent-gold" />,
      title: "Master Roasted",
      description:
        "Every bean is hand-roasted in small batches to unlock its full potential and deepest flavors.",
    },
    {
      icon: <Coffee className="w-8 h-8 text-accent-gold" />,
      title: "Perfectly Crafted",
      description:
        "Our baristas are artisans, turning every cup into a masterpiece of taste and presentation.",
    },
  ];

  return (
    <section id="story" className="py-32 px-6 md:px-20 bg-coffee-800 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-accent-cream mb-6">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-accent-gold rounded-full mb-8" />
          <p className="text-accent-cream/70 text-lg font-light leading-relaxed mb-6">
            Born from a passion for the perfect brew, Aura Roasters started as a
            small dream in a vintage garage. Today, we are a sanctuary for
            coffee lovers seeking the extraordinary.
          </p>
          <p className="text-accent-cream/70 text-lg font-light leading-relaxed">
            We believe that coffee is more than just a drink; it is an
            experience, a ritual, and an art form. From the high-altitude farms
            to your cup, we obsess over every detail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="lg:w-1/2 flex flex-col gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 10 }}
              className="flex items-start gap-6 glass p-6 rounded-2xl border-l-4 border-l-accent-gold hover:bg-white/5 transition-all cursor-default"
            >
              <div className="flex-shrink-0 mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-serif text-accent-cream mb-2">
                  {feature.title}
                </h3>
                <p className="text-accent-cream/60 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
