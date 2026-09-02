"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function BackgroundGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Very smooth, slow following spring
  const springX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Set initial position to center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden mix-blend-screen">
      {/* 
        A massive, very soft golden radial gradient that tracks the mouse.
        The mix-blend-screen makes it act like a flashlight highlighting the dark UI.
      */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-[0.15]"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 175, 55, 1) 0%, rgba(28, 22, 20, 0) 70%)",
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Ambient floating orb for background life */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[150px] opacity-[0.1]"
        style={{
          background:
            "radial-gradient(circle, rgba(166, 114, 70, 1) 0%, rgba(28, 22, 20, 0) 70%)",
        }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -200, 100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      />
    </div>
  );
}
