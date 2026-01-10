'use client';

import { Canvas as R3FCanvas } from '@react-three/fiber';
import Scene from './Scene';

export default function Canvas() {
  return (
    <div className="fixed inset-0 z-0">
      <R3FCanvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </R3FCanvas>
    </div>
  );
}
