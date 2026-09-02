"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export function LocationsSection() {
  const locations = [
    {
      name: "The Grand Roastery",
      address: "124 Espresso Lane, Coffee District",
      hours: "Mon-Sun: 7am - 9pm",
    },
    {
      name: "Downtown Aura",
      address: "89 Mocha Blvd, City Center",
      hours: "Mon-Fri: 6am - 8pm",
    },
    {
      name: "Aura by the Bay",
      address: "45 Marina Way, Waterfront",
      hours: "Mon-Sun: 8am - 10pm",
    },
  ];

  return (
    <section
      id="locations"
      className="py-32 px-6 md:px-20 bg-coffee-900 relative scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-accent-cream mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#110D0B] border border-white/5 p-8 rounded-2xl flex flex-col items-center group cursor-pointer hover:border-accent-gold/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="text-2xl font-serif text-accent-cream mb-4">
                {loc.name}
              </h3>
              <p className="text-accent-cream/60 font-light mb-4">
                {loc.address}
              </p>

              <div className="flex items-center gap-2 text-accent-gold/80 mt-auto pt-6 border-t border-white/5 w-full justify-center">
                <Clock className="w-4 h-4" />
                <span className="text-sm tracking-wide">{loc.hours}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
