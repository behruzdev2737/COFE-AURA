"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

let toastCounter = 0;
type Toast = { id: number; message: string };
let listeners: ((toasts: Toast[]) => void)[] = [];
let activeToasts: Toast[] = [];

export function addToast(message: string) {
  const id = ++toastCounter;
  activeToasts = [...activeToasts, { id, message }];
  listeners.forEach((l) => l(activeToasts));

  setTimeout(() => {
    activeToasts = activeToasts.filter((t) => t.id !== id);
    listeners.forEach((l) => l(activeToasts));
  }, 3000);
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    listeners.push(setToasts);
    return () => {
      listeners = listeners.filter((l) => l !== setToasts);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="pointer-events-auto flex items-center gap-3 bg-coffee-800 text-accent-cream px-6 py-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-accent-gold/20"
          >
            <CheckCircle2 className="w-5 h-5 text-accent-gold" />
            <span className="font-medium tracking-wide text-sm">
              {t.message}
            </span>
            <button
              onClick={() => {
                activeToasts = activeToasts.filter((x) => x.id !== t.id);
                listeners.forEach((l) => l(activeToasts));
              }}
              className="ml-4 text-accent-cream/40 hover:text-accent-cream transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
