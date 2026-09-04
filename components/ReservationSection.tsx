"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { addToast } from "./Toast";

import { useAppContext } from "./AppContext";

export function ReservationSection() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const { t } = useAppContext();

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && time && guests) {
      addToast(t("toast.reserved"));
      setDate("");
      setTime("");
      setGuests("2");
    }
  };

  return (
    <section
      id="reserve"
      className="py-32 px-6 md:px-20 bg-coffee-800 relative border-t border-white/5 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-accent-cream mb-6">
            {t("reserve.title")}
          </h2>
          <div className="w-24 h-1 bg-accent-gold rounded-full mb-8" />
          <p className="text-accent-cream/70 text-lg font-light leading-relaxed mb-8">
            {t("reserve.subtitle")}
          </p>
          <p className="text-accent-cream/50 font-light italic">
            {t("reserve.note")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full"
        >
          <form
            onSubmit={handleReserve}
            className="bg-[#110D0B] p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-accent-cream/50 uppercase tracking-widest font-semibold flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {t("reserve.date")}
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#1C1614] border border-white/10 rounded-lg py-3 px-4 text-accent-cream focus:outline-none focus:border-accent-gold/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-accent-cream/50 uppercase tracking-widest font-semibold flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {t("reserve.time")}
                  </label>
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#1C1614] border border-white/10 rounded-lg py-3 px-4 text-accent-cream focus:outline-none focus:border-accent-gold/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-accent-cream/50 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <Users className="w-3 h-3" /> {t("reserve.guests")}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#1C1614] border border-white/10 rounded-lg py-3 px-4 text-accent-cream focus:outline-none focus:border-accent-gold/50 transition-colors appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num}{" "}
                      {num === 1 ? t("reserve.person") : t("reserve.people")}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-gold text-coffee-900 py-4 rounded-lg font-bold tracking-widest hover:bg-accent-cream transition-all duration-300 mt-4 flex items-center justify-center gap-2 group"
              >
                {t("reserve.book")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
