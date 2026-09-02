"use client";

import { motion } from "framer-motion";
import { Coffee, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { addToast } from "./Toast";

import { useAppContext } from "./AppContext";

export function Footer() {
  const [email, setEmail] = useState("");
  const { t } = useAppContext();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      addToast(t("toast.subscribed"));
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0B0806] pt-20 pb-10 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6 text-accent-gold">
            <Coffee className="w-8 h-8" />
            <span className="font-serif text-2xl font-bold tracking-wider text-accent-cream">
              AURA
            </span>
          </div>
          <p className="text-accent-cream/60 font-light leading-relaxed mb-6">
            {t("footer.desc")}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#110D0B] border border-white/5 flex items-center justify-center text-accent-cream hover:text-accent-gold hover:border-accent-gold/50 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#110D0B] border border-white/5 flex items-center justify-center text-accent-cream hover:text-accent-gold hover:border-accent-gold/50 transition-all"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#110D0B] border border-white/5 flex items-center justify-center text-accent-cream hover:text-accent-gold hover:border-accent-gold/50 transition-all"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-accent-cream mb-6 tracking-wide">
            {t("footer.explore")}
          </h4>
          <ul className="space-y-4 text-accent-cream/60 font-light">
            <li>
              <a
                href="#menu"
                className="hover:text-accent-gold transition-colors"
              >
                {t("nav.menu")}
              </a>
            </li>
            <li>
              <a
                href="#story"
                className="hover:text-accent-gold transition-colors"
              >
                {t("nav.story")}
              </a>
            </li>
            <li>
              <a
                href="#locations"
                className="hover:text-accent-gold transition-colors"
              >
                {t("nav.locations")}
              </a>
            </li>
            <li>
              <a
                href="#shop"
                className="hover:text-accent-gold transition-colors"
              >
                {t("nav.shop")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-accent-cream mb-6 tracking-wide">
            {t("footer.legal")}
          </h4>
          <ul className="space-y-4 text-accent-cream/60 font-light">
            <li>
              <a href="#" className="hover:text-accent-gold transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent-gold transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent-gold transition-colors">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent-gold transition-colors">
                Returns
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="font-serif text-lg text-accent-cream mb-6 tracking-wide">
            {t("footer.stay")}
          </h4>
          <p className="text-accent-cream/60 font-light mb-4">
            {t("footer.stay_desc")}
          </p>
          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              placeholder={t("footer.placeholder")}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#110D0B] border border-white/10 rounded-full py-3 px-6 text-accent-cream focus:outline-none focus:border-accent-gold/50 transition-colors placeholder:text-white/20"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-accent-gold text-coffee-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-cream transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-accent-cream/40 text-sm font-light">
        <p>{t("footer.rights")}</p>
        <p className="mt-2 md:mt-0">{t("footer.crafted")}</p>
      </div>
    </footer>
  );
}
