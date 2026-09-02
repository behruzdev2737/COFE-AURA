"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Coffee } from "lucide-react";
import { useAppContext } from "./AppContext";

export function MobileMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useAppContext();

  const links = [
    { name: "MENU", href: "#menu" },
    { name: "OUR STORY", href: "#story" },
    { name: "LOCATIONS", href: "#locations" },
  ];

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[100] bg-[#0B0806]/95 backdrop-blur-xl flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/5">
            <div className="flex items-center gap-2 text-accent-gold">
              <Coffee className="w-8 h-8" />
              <span className="font-serif text-2xl font-bold tracking-wider text-accent-cream">
                AURA
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-accent-cream hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-12">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                className="text-4xl font-serif text-accent-cream hover:text-accent-gold transition-colors tracking-widest"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Footer inside mobile menu */}
          <div className="p-10 border-t border-white/5 text-center">
            <p className="text-accent-cream/50 tracking-widest text-sm">
              EXPERIENCE THE EXTRAORDINARY
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
