'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Suspense } from 'react';

function Book() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group rotation={[0, 0.3, 0]}>
        {/* Book cover */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2.8, 0.2]} />
          <meshStandardMaterial color="#0066ff" emissive="#0044aa" emissiveIntensity={0.5} />
        </mesh>
        
        {/* Glowing edges */}
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[2, 2.8]} />
          <meshStandardMaterial color="#0088ff" emissive="#0088ff" emissiveIntensity={0.8} transparent opacity={0.3} />
        </mesh>

        {/* 100/100 text placeholder */}
        <mesh position={[0, 0.5, 0.12]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.05, 16, 32]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
      </group>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#0088ff" intensity={0.5} />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Suspense fallback={null}>
        <Book />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
