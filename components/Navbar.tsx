"use client";

import { motion } from "framer-motion";
import { Coffee, Menu, ShoppingBag } from "lucide-react";
import { useAppContext } from "./AppContext";

export function Navbar() {
  const { setIsMobileMenuOpen, setIsCartOpen, cartItems } = useAppContext();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0806]/95 border-b border-white/5 backdrop-blur-md px-6 py-4 flex justify-between items-center"
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
        {/* Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent-cream hover:bg-white/5 hover:text-accent-gold hover:border-accent-gold/50 transition-all"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent-gold text-coffee-900 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-cream hover:bg-white/10 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
}
