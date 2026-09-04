"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Map, Target, Flame } from "lucide-react";
import { useAppContext } from "./AppContext";
import { addToast } from "./Toast";
import { BeanSelector3D } from "./BeanSelector3D";

export function ProductModal() {
  const {
    isModalOpen,
    setIsModalOpen,
    selectedProduct,
    setSelectedProduct,
    addToCart,
    t,
  } = useAppContext();

  if (!selectedProduct) return null;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0B0806] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
          >
            <div className="w-full md:w-2/5 bg-gradient-to-br from-[#1C1614] to-[#0B0806] flex flex-col items-center justify-center p-0 border-b md:border-b-0 md:border-r border-white/5 relative min-h-[300px]">
              <div className="absolute top-6 text-center w-full z-10 pointer-events-none">
                <h3 className="text-accent-cream/50 uppercase tracking-widest text-xs font-semibold">
                  {t("menu.bean") || "Select Bean"}
                </h3>
              </div>
              <BeanSelector3D
                onSelectBean={(beanName) => {
                  setSelectedProduct({
                    ...selectedProduct,
                    beanType: beanName,
                  });
                }}
              />
            </div>

            <div className="w-full md:w-3/5 p-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#1C1614] rounded-xl border border-white/5 flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedProduct.image || "/coffee-placeholder.svg"}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl text-accent-cream">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-xl font-mono text-accent-gold font-bold">
                      {selectedProduct.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent-cream hover:text-accent-gold transition-colors shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-accent-cream/70 font-light leading-relaxed mb-8">
                {selectedProduct.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Map className="w-5 h-5 text-accent-gold/50" />
                  <div>
                    <p className="text-xs text-accent-cream/40 uppercase tracking-wider">
                      {t("menu.origin")}
                    </p>
                    <p className="text-sm text-accent-cream/80">
                      {selectedProduct.origin || "Ethiopia & Colombia"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-accent-gold/50" />
                  <div>
                    <p className="text-xs text-accent-cream/40 uppercase tracking-wider">
                      {t("menu.bean")}
                    </p>
                    <p className="text-sm text-accent-cream/80 font-semibold text-accent-gold">
                      {selectedProduct.beanType || "Robusta"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-accent-gold/50" />
                  <div>
                    <p className="text-xs text-accent-cream/40 uppercase tracking-wider">
                      {t("menu.roast")}
                    </p>
                    <p className="text-sm text-accent-cream/80">
                      {selectedProduct.roast || "Medium Dark"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => {
                    addToCart({
                      id: selectedProduct.id.toString(),
                      name: selectedProduct.name,
                      price: selectedProduct.price,
                      image: selectedProduct.image || "/coffee-placeholder.svg",
                    });
                    setIsModalOpen(false);
                    addToast(
                      `${selectedProduct.name} ${t ? t("toast.added") : "added to cart!"}`,
                    );
                  }}
                  className="w-full bg-accent-gold text-coffee-900 py-4 rounded-full font-bold tracking-widest hover:bg-accent-gold/90 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  {t ? t("menu.add_to_cart") : "ADD TO CART"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
