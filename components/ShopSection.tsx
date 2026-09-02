"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useAppContext } from "./AppContext";
import { addToast } from "./Toast";

const beansProducts = [
  {
    id: "bean-1",
    name: "Ethiopian Yirgacheffe",
    description:
      "Light roast whole beans. Bright acidity with notes of jasmine, bergamot, and blueberry.",
    price: "$22.00",
    color: "#8B5A2B", // Brownish/Gold
    image: "/coffee-4.jpg",
  },
  {
    id: "bean-2",
    name: "Sumatra Mandheling",
    description:
      "Dark roast whole beans. Full-bodied, earthy, with deep cocoa and spice undertones.",
    price: "$19.50",
    color: "#2C1E16", // Very dark
    image: "/coffee-1.jpg",
  },
  {
    id: "bean-3",
    name: "Aura Signature Blend",
    description:
      "Medium roast. Our house blend balanced for espresso with caramel and toasted nut flavors.",
    price: "$24.00",
    color: "#D4AF37", // Gold
    image: "/coffee-2.jpg",
  },
];

function CoffeeBag3D({
  color,
  isHovered,
}: {
  color: string;
  isHovered: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle floating and auto-rotation
      meshRef.current.rotation.y += delta * (isHovered ? 1.5 : 0.5);
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;

      // Tilt towards mouse slightly when hovered
      if (isHovered) {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          (state.pointer.y * Math.PI) / 6,
          0.1,
        );
        meshRef.current.rotation.z = THREE.MathUtils.lerp(
          meshRef.current.rotation.z,
          -(state.pointer.x * Math.PI) / 6,
          0.1,
        );
      } else {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          0,
          0.1,
        );
        meshRef.current.rotation.z = THREE.MathUtils.lerp(
          meshRef.current.rotation.z,
          0,
          0.1,
        );
      }
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {/* Simple Box representing a coffee bag, slightly tapered at top using scale if it was a custom geo, but box is fine */}
      <boxGeometry args={[1.2, 2, 0.8]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.7}
        metalness={0.1}
        clearcoat={0.1}
      />
      {/* Label area */}
      <mesh position={[0, 0, 0.41]}>
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial color="#0B0806" />
      </mesh>
    </mesh>
  );
}

import { useState } from "react";

function ShopCard({ product }: { product: (typeof beansProducts)[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, t } = useAppContext();

  return (
    <div
      className="bg-[#110D0B] border border-white/5 rounded-2xl p-6 flex flex-col h-full group hover:border-accent-gold/40 transition-colors relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-64 w-full mb-6 relative">
        <div className="absolute inset-0 z-10">
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} />
            <Suspense fallback={null}>
              <CoffeeBag3D color={product.color} isHovered={isHovered} />
            </Suspense>
          </Canvas>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#110D0B] to-transparent z-20 pointer-events-none" />
      </div>

      <div className="relative z-30 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-accent-cream group-hover:text-accent-gold transition-colors">
            {product.name}
          </h3>
          <span className="font-mono text-lg text-accent-gold font-semibold">
            {product.price}
          </span>
        </div>
        <p className="text-accent-cream/60 font-light text-sm leading-relaxed mb-6 flex-1">
          {product.description}
        </p>

        <button
          onClick={() => {
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            });
            addToast(
              `${product.name} ${t ? t("toast.added") : "added to cart!"}`,
            );
          }}
          className="w-full py-3 bg-white/5 border border-white/10 text-accent-cream rounded-lg group-hover:bg-accent-gold group-hover:text-coffee-900 group-hover:border-accent-gold transition-all duration-300 font-bold tracking-widest text-sm"
        >
          {t ? t("shop.add_to_cart") : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
}

export function ShopSection() {
  const { t } = useAppContext();

  return (
    <section
      id="shop"
      className="py-32 px-6 md:px-20 bg-[#0B0806] relative border-t border-white/5 scroll-mt-24"
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
            {t("shop.title")}
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full mb-6" />
          <p className="text-accent-cream/60 max-w-2xl mx-auto font-light text-lg">
            {t("shop.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beansProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ShopCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
