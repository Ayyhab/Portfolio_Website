'use client';

import { useState, useEffect, memo } from 'react';
import { Canvas as R3FCanvas } from '@react-three/fiber';
import Scene from './Scene';

interface CanvasProps {
  totalProjects?: number;
}

function Canvas({ totalProjects = 3 }: CanvasProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only render WebGL after initial load to improve performance
    const timer = setTimeout(() => setShouldRender(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) {
    return <div className="fixed inset-0 z-0 bg-black" />;
  }

  return (
    <div className="fixed inset-0 z-0">
      <R3FCanvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // Limit pixel ratio for performance
      >
        <Scene totalProjects={totalProjects} />
      </R3FCanvas>
    </div>
  );
}

export default memo(Canvas);
