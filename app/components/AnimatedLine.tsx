'use client';

import { memo, useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLenis } from '../hooks/useLenis';
import * as THREE from 'three';

interface AnimatedLineProps {
  activeProjectIndex?: number | null;
  totalProjects?: number;
}

function AnimatedLine({
  activeProjectIndex = null,
  totalProjects = 3,
}: AnimatedLineProps) {
  const lineRef = useRef<THREE.LineSegments>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  const { scrollProgress } = useLenis();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initial geometry
  useEffect(() => {
    if (!geometryRef.current) return;

    const segments = 32;
    const length = 12;
    const positions = new Float32Array((segments + 1) * 3);

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = (t - 0.5) * length;
      const y = Math.sin(t * Math.PI * 2) * 0.15;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = 0;
    }

    geometryRef.current.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
  }, []);

  useFrame((state) => {
    if (!lineRef.current || !geometryRef.current) return;

    // Subtle scroll rotation
    lineRef.current.rotation.z = scrollProgress * Math.PI * 0.1;
    lineRef.current.rotation.y = scrollProgress * Math.PI * 0.05;

    // Bend logic
    let bendAmount = 0;
    let bendPosition = 0.5;

    if (activeProjectIndex !== null && totalProjects > 0) {
      bendPosition = (activeProjectIndex + 1) / (totalProjects + 1);
      bendAmount = 0.3;
    }

    const positions = geometryRef.current.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i <= 32; i++) {
      const t = i / 32;
      const x = (t - 0.5) * 12;

      const baseY = Math.sin(t * Math.PI * 2) * 0.15;
      const animatedY =
        baseY + Math.sin(state.clock.elapsedTime * 0.3 + t * 2) * 0.05;

      const dist = Math.abs(t - bendPosition);
      const influence = Math.exp(-(dist * dist) * 20) * bendAmount;
      const direction = t < bendPosition ? -1 : 1;

      positions.setXYZ(i, x, animatedY + influence * direction, 0);
    }

    positions.needsUpdate = true;

    // Cursor parallax
    lineRef.current.position.x = mouse.x * 0.1;
    lineRef.current.position.y = mouse.y * 0.1;
  });

  return (
    <lineSegments ref={lineRef} position={[0, 0, -3]}>
      <bufferGeometry ref={geometryRef} />
      <lineBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.15}
      />
    </lineSegments>
  );
}

export default memo(AnimatedLine);
