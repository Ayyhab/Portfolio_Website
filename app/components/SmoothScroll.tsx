'use client';

import { LenisProvider } from '../contexts/LenisContext';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <LenisProvider>{children}</LenisProvider>;
}
