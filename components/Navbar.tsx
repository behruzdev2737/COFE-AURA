"use client";

import { motion } from "framer-motion";
import { Coffee, Menu } from "lucide-react";
import { addToast } from "./Toast";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center"
    >
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
      >
        <Coffee className="w-8 h-8 text-accent-gold" />
        <span className="font-serif text-2xl font-bold tracking-wider text-accent-cream">
          AURA
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-accent-cream/80">
        <a href="#menu" className="hover:text-accent-gold transition-colors">
          MENU
        </a>
        <a href="#story" className="hover:text-accent-gold transition-colors">
          OUR STORY
        </a>
        <a
          href="#locations"
          className="hover:text-accent-gold transition-colors"
        >
          LOCATIONS
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => addToast("Order modal coming soon!")}
          className="hidden md:block bg-accent-gold text-coffee-900 px-6 py-2 rounded-full font-bold tracking-wide hover:bg-accent-gold/90 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        >
          ORDER NOW
        </button>
        <button className="md:hidden text-accent-cream">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
}
