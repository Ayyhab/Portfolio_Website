'use client';

import { memo, useRef } from 'react';
import { useLenis } from '../hooks/useLenis';
import { useActiveProject } from '../hooks/useActiveProject';
import F1Car from './F1Car';
import AnimatedLine from './AnimatedLine';
import { Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SceneProps {
  totalProjects?: number;
}

function Scene({ totalProjects = 3 }: SceneProps) {
  const { scrollProgress } = useLenis();
  const activeProjectIndex = useActiveProject(totalProjects);
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.intensity = 1 + scrollProgress * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#DC143C" />
      <Environment preset="sunset" />
      <AnimatedLine activeProjectIndex={activeProjectIndex} totalProjects={totalProjects} />
      <F1Car />
      <fog attach="fog" args={['#0a0a0a', 10, 30]} />
    </>
  );
}

export default memo(Scene);
