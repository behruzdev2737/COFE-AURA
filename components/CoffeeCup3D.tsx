"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  Sparkles,
  Environment,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";

export function CoffeeCup3D() {
  const outerGroup = useRef<THREE.Group>(null);
  const innerGroup = useRef<THREE.Group>(null);
  const liquidStream = useRef<THREE.Mesh>(null);

  // Mouse tracking and Auto-rotation
  useFrame((state, delta) => {
    if (innerGroup.current) {
      innerGroup.current.rotation.y += delta * 0.5;
    }
    if (outerGroup.current) {
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (state.pointer.y * Math.PI) / 10;
      outerGroup.current.rotation.x +=
        (-targetY - outerGroup.current.rotation.x) * 0.1;
      outerGroup.current.rotation.y +=
        (targetX - outerGroup.current.rotation.y) * 0.1;
    }
  });

  // Reusable material for the cup body to ensure consistency
  const cupMaterial = new THREE.MeshPhysicalMaterial({
    color: "#1C1614", // Deep espresso dark brown/black
    roughness: 0.15,
    metalness: 0.3,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
        color="#D4AF37"
      />
      <spotLight position={[-10, -10, -10]} intensity={0.5} color="#F5F5F0" />
      <Environment preset="city" />

      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={2}
        floatingRange={[-0.2, 0.2]}
      >
        <group ref={outerGroup}>
          <group ref={innerGroup}>
            {/* Main Cup Body */}
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
              <cylinderGeometry args={[1.2, 0.9, 2.5, 64]} />
              <primitive object={cupMaterial} attach="material" />
            </mesh>

            {/* Smooth Top Rim */}
            <mesh
              castShadow
              receiveShadow
              position={[0, 1.25, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <torusGeometry args={[1.2, 0.05, 16, 64]} />
              <primitive object={cupMaterial} attach="material" />
            </mesh>

            {/* Smooth Bottom Bevel */}
            <mesh
              castShadow
              receiveShadow
              position={[0, -1.25, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <torusGeometry args={[0.9, 0.05, 16, 64]} />
              <primitive object={cupMaterial} attach="material" />
            </mesh>

            {/* Cup Handle (Oval) */}
            <mesh
              castShadow
              receiveShadow
              position={[1.15, 0.1, 0]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[1, 1.3, 1]}
            >
              <torusGeometry args={[0.6, 0.18, 32, 64, Math.PI]} />
              <primitive object={cupMaterial} attach="material" />
            </mesh>

            {/* Coffee Liquid */}
            <mesh position={[0, 1.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <circleGeometry args={[1.15, 64]} />
              <meshStandardMaterial
                color="#0A0705"
                roughness={0.1}
                metalness={0.8}
              />
            </mesh>
          </group>

          {/* Magic Particles - Steam */}
          <Sparkles
            count={60}
            scale={[2, 3, 2]}
            size={4}
            speed={0.5}
            opacity={0.6}
            color="#D4AF37"
            position={[0, 1.8, 0]}
          />
          <Sparkles
            count={40}
            scale={[1.5, 4, 1.5]}
            size={2}
            speed={0.3}
            opacity={0.4}
            color="#F5F5F0"
            position={[0, 2, 0]}
          />

          {/* Floating Coffee Beans */}
          {[...Array(5)].map((_, i) => (
            <Float
              key={i}
              speed={2 + i * 0.5}
              rotationIntensity={2}
              floatIntensity={3}
              position={[
                Math.sin((i / 5) * Math.PI * 2) * 2.5,
                (Math.random() - 0.5) * 3,
                Math.cos((i / 5) * Math.PI * 2) * 2.5,
              ]}
            >
              <mesh castShadow receiveShadow>
                <capsuleGeometry args={[0.15, 0.2, 16, 16]} />
                <meshStandardMaterial
                  color="#2C2420"
                  roughness={0.8}
                  metalness={0.1}
                />
              </mesh>
            </Float>
          ))}

          {/* Dummy object at the lip of the cup for stream positioning */}
          <group position={[-1.1, 1.2, 0]} name="lipPosition" />
        </group>
      </Float>
    </>
  );
}
