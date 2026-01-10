'use client';

import { memo, useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLenis } from '../hooks/useLenis';
import * as THREE from 'three';

interface AnimatedLineProps {
  activeProjectIndex?: number | null;
  totalProjects?: number;
}

function AnimatedLine({ activeProjectIndex = null, totalProjects = 3 }: AnimatedLineProps) {
  const lineRef = useRef<THREE.Line>(null);
  const { scrollProgress } = useLenis();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create line geometry with subtle curvature
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  useEffect(() => {
    if (geometryRef.current) {
      // Create points for a subtle curved line
      const segments = 32;
      const length = 12;
      const positions = new Float32Array((segments + 1) * 3);

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const x = (t - 0.5) * length;
        // Very subtle sine wave for curvature
        const y = Math.sin(t * Math.PI * 2) * 0.15;
        const z = 0;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      }

      geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometryRef.current.computeBoundingSphere();
    }
  }, []);

  useFrame((state) => {
    if (lineRef.current && geometryRef.current) {
      // Slight rotation based on scroll progress
      lineRef.current.rotation.z = scrollProgress * Math.PI * 0.1; // Very subtle rotation
      lineRef.current.rotation.y = scrollProgress * Math.PI * 0.05;

      // Calculate bend near active project
      let bendAmount = 0;
      let bendPosition = 0.5; // Center of line
      
      if (activeProjectIndex !== null && totalProjects > 0) {
        // Map project index to line position (0 to 1)
        bendPosition = (activeProjectIndex + 1) / (totalProjects + 1);
        // Subtle bend amount
        bendAmount = 0.3;
      }

      // Update curvature with subtle sine wave and project bend
      const positions = geometryRef.current.attributes.position;
      if (positions) {
        for (let i = 0; i <= 32; i++) {
          const t = i / 32;
          const x = (t - 0.5) * 12;
          
          // Base sine curvature
          const baseY = Math.sin(t * Math.PI * 2) * 0.15;
          
          // Animated sine wave
          const animatedY = baseY + Math.sin(state.clock.elapsedTime * 0.3 + t * 2) * 0.05;
          
          // Add bend near active project (Gaussian-like curve)
          const distanceFromBend = Math.abs(t - bendPosition);
          const bendInfluence = Math.exp(-(distanceFromBend * distanceFromBend) * 20) * bendAmount;
          const bendDirection = t < bendPosition ? -1 : 1;
          const finalY = animatedY + bendInfluence * bendDirection;
          
          const z = 0;

          positions.setXYZ(i, x, finalY, z);
        }
        positions.needsUpdate = true;
      }

      // Minimal cursor parallax - very subtle
      const parallaxX = mouse.x * 0.1;
      const parallaxY = mouse.y * 0.1;
      lineRef.current.position.x = parallaxX;
      lineRef.current.position.y = parallaxY;
    }
  });

  return (
    <line ref={lineRef} position={[0, 0, -3]}>
      <bufferGeometry ref={geometryRef} />
      <lineBasicMaterial
        color="#ffffff"
        opacity={0.15}
        transparent
      />
    </line>
  );
}

export default memo(AnimatedLine);
