"use client";

import { motion } from "framer-motion";
import { Coffee, Sprout, Flame } from "lucide-react";

import { useAppContext } from "./AppContext";

export function StorySection() {
  const { t } = useAppContext();

  const features = [
    {
      icon: <Sprout className="w-8 h-8 text-accent-gold" />,
      title: t("story.f1_title"),
      description: t("story.f1_desc"),
    },
    {
      icon: <Flame className="w-8 h-8 text-accent-gold" />,
      title: t("story.f2_title"),
      description: t("story.f2_desc"),
    },
    {
      icon: <Coffee className="w-8 h-8 text-accent-gold" />,
      title: t("story.f3_title"),
      description: t("story.f3_desc"),
    },
  ];

  return (
    <section
      id="story"
      className="py-32 px-6 md:px-20 bg-coffee-800 relative scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-accent-cream mb-6">
            {t("story.title")}
          </h2>
          <div className="w-24 h-1 bg-accent-gold rounded-full mb-8" />
          <p className="text-accent-cream/70 text-lg font-light leading-relaxed mb-6">
            {t("story.p1")}
          </p>
          <p className="text-accent-cream/70 text-lg font-light leading-relaxed">
            {t("story.p2")}
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
              className="flex items-start gap-6 p-6 rounded-2xl border-l-4 border-l-accent-gold bg-[#110D0B]/30 hover:bg-white/5 transition-all cursor-default"
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
