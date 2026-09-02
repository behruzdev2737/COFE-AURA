"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useAppContext } from "./AppContext";
import { addToast } from "./Toast";

export function CartSidebar() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    t,
  } = useAppContext();

  const handleCheckout = () => {
    addToast(t("toast.checkout"));
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-[#110D0B] border-l border-white/5 z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="font-serif text-2xl text-accent-cream flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-accent-gold" />{" "}
                {t("cart.title")}
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 hover:text-accent-gold transition-colors text-accent-cream"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-accent-cream/50 space-y-4">
                  <ShoppingBag className="w-12 h-12 opacity-20" />
                  <p>{t("cart.empty")}</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-[#1C1614] p-4 rounded-xl border border-white/5 relative group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-accent-cream">
                        {item.name}
                      </h3>
                      <p className="text-accent-gold font-medium mb-3">
                        {item.price}
                      </p>

                      <div className="flex items-center gap-3 bg-[#0B0806] w-fit rounded-full px-2 py-1 border border-white/5">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 hover:text-accent-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 hover:text-accent-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-4 right-4 text-accent-cream/40 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-[#0B0806]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-accent-cream/60">
                    {t("cart.total")}
                  </span>
                  <span className="text-2xl font-serif text-accent-cream">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-accent-gold text-coffee-900 py-4 rounded-full font-bold tracking-widest hover:bg-accent-gold/90 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  {t("cart.checkout")}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
