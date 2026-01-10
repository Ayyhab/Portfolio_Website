'use client';

import { useLenis } from '../hooks/useLenis';
import F1Car from './F1Car';
import AnimatedLine from './AnimatedLine';
import PortraitPlane from './PortraitPlane';
import { Environment } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Scene() {
  const { scrollProgress } = useLenis();
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    if (lightRef.current) {
      // Adjust lighting based on scroll
      lightRef.current.intensity = 1 + scrollProgress * 0.5;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#DC143C" />
      
      {/* Environment for reflections */}
      <Environment preset="sunset" />
      
      {/* Animated line - fixed in world space */}
      <AnimatedLine />
      
      {/* Portrait Plane */}
      <PortraitPlane />
      
      {/* F1 Car */}
      <F1Car />
      
      {/* Subtle fog for depth */}
      <fog attach="fog" args={['#0a0a0a', 10, 30]} />
    </>
  );
}
