"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { ChevronLeft, ChevronRight } from "lucide-react";

const beanVariants = [
  {
    id: "arabica",
    name: "Arabica",
    color: "#C17D45",
    description: "Light Roast",
  },
  {
    id: "robusta",
    name: "Robusta",
    color: "#5A3215",
    description: "Medium Roast",
  },
  {
    id: "liberica",
    name: "Liberica",
    color: "#2E1809",
    description: "Dark Roast",
  },
  {
    id: "excelsa",
    name: "Excelsa",
    color: "#110803",
    description: "Espresso Roast",
  },
];

function SingleCoffeeBean({ targetColor }: { targetColor: string }) {
  const groupRef = useRef<THREE.Group>(null!);
  const matRef1 = useRef<THREE.MeshPhysicalMaterial>(null!);
  const matRef2 = useRef<THREE.MeshPhysicalMaterial>(null!);
  const [hovered, setHovered] = useState(false);

  // Parse target color
  const targetColorObj = new THREE.Color(targetColor);
  const transitionRef = useRef(0);

  useEffect(() => {
    // Trigger animation state when color changes
    transitionRef.current = 1.0;
  }, [targetColor]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Base speed
      let speedY = hovered ? 2.5 : 1.0;
      let speedX = hovered ? 0.8 : 0.2;

      let bounce = 0;

      // Transition Animation (Fast spin and scale bounce)
      if (transitionRef.current > 0) {
        speedY += transitionRef.current * 20; // Super fast spin
        bounce = Math.sin(transitionRef.current * Math.PI) * 0.6; // Pop out and in
        transitionRef.current -= delta * 1.5; // Decay
      }

      // Rotation
      groupRef.current.rotation.y += delta * speedY;
      groupRef.current.rotation.x += delta * speedX;

      // Float effect
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 3) * 0.15;

      // Scale
      const targetScale = (hovered ? 1.6 : 1.4) + Math.max(0, bounce);
      groupRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1,
      );
    }

    // Smoothly interpolate color
    if (matRef1.current && matRef2.current) {
      // Speed up color interpolation during transition
      const lerpSpeed = transitionRef.current > 0 ? 0.15 : 0.05;
      matRef1.current.color.lerp(targetColorObj, lerpSpeed);
      matRef2.current.color.lerp(targetColorObj, lerpSpeed);
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      rotation={[0.5, 0, 0]}
    >
      {/* Left Half */}
      <mesh
        castShadow
        receiveShadow
        position={[-0.1, 0, 0]}
        rotation={[0, 0, Math.PI / 12]}
      >
        <capsuleGeometry args={[0.3, 0.5, 16, 32]} />
        <meshPhysicalMaterial
          ref={matRef1}
          color={targetColor}
          roughness={0.3}
          metalness={0.1}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
        />
      </mesh>
      {/* Right Half */}
      <mesh
        castShadow
        receiveShadow
        position={[0.1, 0, 0]}
        rotation={[0, 0, -Math.PI / 12]}
      >
        <capsuleGeometry args={[0.3, 0.5, 16, 32]} />
        <meshPhysicalMaterial
          ref={matRef2}
          color={targetColor}
          roughness={0.3}
          metalness={0.1}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
        />
      </mesh>
    </group>
  );
}

export function BeanSelector3D({
  onSelectBean,
}: {
  onSelectBean: (beanName: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIdx =
      (currentIndex - 1 + beanVariants.length) % beanVariants.length;
    setCurrentIndex(newIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIdx = (currentIndex + 1) % beanVariants.length;
    setCurrentIndex(newIdx);
  };

  // Sync with parent when it changes
  useEffect(() => {
    onSelectBean(beanVariants[currentIndex].name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const currentVariant = beanVariants[currentIndex];

  return (
    <div className="w-full h-full flex flex-col relative group">
      {/* 3D Canvas */}
      <div className="flex-1 relative cursor-pointer">
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} />
          <Suspense fallback={null}>
            <SingleCoffeeBean targetColor={currentVariant.color} />
          </Suspense>
        </Canvas>

        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-cream hover:bg-accent-gold hover:text-coffee-900 transition-all shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-cream hover:bg-accent-gold hover:text-coffee-900 transition-all shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Selected Bean Info at the bottom */}
      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
        <p className="text-accent-cream/40 text-xs tracking-widest uppercase mb-1">
          {currentVariant.description}
        </p>
        <h4 className="text-accent-gold font-serif text-2xl drop-shadow-md">
          {currentVariant.name}
        </h4>
      </div>
    </div>
  );
}
