'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLenis } from '../hooks/useLenis';
import * as THREE from 'three';

export default function F1Car() {
  const carRef = useRef<THREE.Group>(null);
  const { scrollProgress } = useLenis();

  useFrame((state, delta) => {
    if (carRef.current) {
      // Calculate position based on scroll progress
      // Car moves from left to right as you scroll through sections
      const x = -8 + scrollProgress * 16; // Moves from -8 to 8
      const y = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.4; // Gentle floating motion
      const z = -4 + Math.cos(state.clock.elapsedTime * 0.3) * 1.5; // Depth movement
      
      carRef.current.position.set(x, y, z);
      
      // Rotate car to face direction of movement
      carRef.current.rotation.y = Math.PI * 0.5 + scrollProgress * Math.PI * 0.3;
      carRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
      carRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
    }
  });

  return (
    <group ref={carRef}>
      {/* Main body - Ferrari red */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.6, 1]} />
        <meshStandardMaterial color="#DC143C" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Cockpit/Driver area */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.8, 0.4, 0.9]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Front wing */}
      <mesh position={[1.2, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.1, 1.2]} />
        <meshStandardMaterial color="#DC143C" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Rear wing */}
      <mesh position={[-1.2, 0.3, 0]}>
        <boxGeometry args={[0.2, 0.5, 1.1]} />
        <meshStandardMaterial color="#DC143C" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Wheels */}
      {/* Front left */}
      <mesh position={[0.8, -0.4, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Front right */}
      <mesh position={[0.8, -0.4, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Rear left */}
      <mesh position={[-0.8, -0.4, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Rear right */}
      <mesh position={[-0.8, -0.4, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Ferrari logo placeholder - yellow badge */}
      <mesh position={[0, 0.2, 0.55]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Side mirrors */}
      <mesh position={[0.3, 0.4, 0.6]}>
        <boxGeometry args={[0.1, 0.15, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.3, 0.4, -0.6]}>
        <boxGeometry args={[0.1, 0.15, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}
