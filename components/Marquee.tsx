"use client";

import { motion } from "framer-motion";

export function Marquee() {
  const text = "PREMIUM ARTISANAL COFFEE • FRESHLY ROASTED • PURE MAGIC • ";

  return (
    <div className="w-full bg-accent-gold text-coffee-900 py-4 overflow-hidden flex whitespace-nowrap items-center border-y border-white/10 z-20 relative">
      <motion.div
        className="flex font-serif font-bold text-xl md:text-2xl tracking-widest uppercase"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Repeat text multiple times to ensure seamless infinite loop */}
        <span className="pr-4">{text}</span>
        <span className="pr-4">{text}</span>
        <span className="pr-4">{text}</span>
        <span className="pr-4">{text}</span>
      </motion.div>
    </div>
  );
}
