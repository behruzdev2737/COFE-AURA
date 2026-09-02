"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { addToast } from "./Toast";
import React from "react";

// --- existing menuItems & variants ---
const menuItems = [
  {
    id: 1,
    name: "Midnight Espresso",
    description:
      "A bold, intense shot with notes of dark chocolate and black cherry. Roasted for the purist.",
    price: "$4.50",
  },
  {
    id: 2,
    name: "Velvet Macchiato",
    description:
      "Silky steamed milk gently layered over robust espresso, finished with a whisper of vanilla bean.",
    price: "$5.50",
  },
  {
    id: 3,
    name: "Golden Cortado",
    description:
      "Equal parts rich espresso and textured milk, balanced perfectly for a smooth, lingering finish.",
    price: "$4.75",
  },
  {
    id: 4,
    name: "Aura Pour Over",
    description:
      "Single-origin Ethiopian beans slowly brewed to highlight floral aromas and bright citrus undertones.",
    price: "$6.00",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function TiltCard({ item }: { item: (typeof menuItems)[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Convert to percentage centered around 0
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      style={{
        perspective: 1000,
      }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        data-interactive
        className="glass p-8 rounded-2xl group cursor-pointer transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] hover:border-accent-gold/50 flex flex-col h-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl"
      >
        <div
          className="flex justify-between items-start mb-4"
          style={{ transform: "translateZ(30px)" }}
        >
          <h3 className="font-serif text-2xl text-accent-cream group-hover:text-accent-gold transition-colors">
            {item.name}
          </h3>
          <span className="font-mono text-xl text-accent-gold font-semibold">
            {item.price}
          </span>
        </div>
        <p
          className="text-accent-cream/60 font-light leading-relaxed mb-6"
          style={{ transform: "translateZ(20px)" }}
        >
          {item.description}
        </p>
        <div className="mt-auto" style={{ transform: "translateZ(40px)" }}>
          <button
            onClick={() => addToast(`${item.name} added to cart!`)}
            className="w-full py-2 bg-accent-gold/10 border border-accent-gold text-accent-gold rounded-lg hover:bg-accent-gold hover:text-coffee-900 transition-colors duration-300 font-bold tracking-widest"
          >
            ADD TO CART
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function MenuSection() {
  return (
    <section id="menu" className="py-32 px-6 md:px-20 bg-coffee-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-accent-cream mb-4">
            Signature Brews
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {menuItems.map((item) => (
            <TiltCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
