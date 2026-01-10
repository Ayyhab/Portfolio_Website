'use client';

import { Canvas as R3FCanvas } from '@react-three/fiber';

export default function Canvas() {
  return (
    <div className="fixed inset-0 z-0">
      <R3FCanvas>
        {/* Canvas content will go here */}
      </R3FCanvas>
    </div>
  );
}
