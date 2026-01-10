'use client';

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

interface LenisContextType {
  lenis: Lenis | null;
  scrollProgress: number;
  scrollVelocity: number;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollProgress: 0,
  scrollVelocity: 0,
});

export const useLenis = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenis must be used within LenisProvider');
  }
  return context;
};

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const rafIdRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      
      // Calculate scroll progress (0-1)
      const currentScroll = lenisInstance.scroll;
      const maxScroll = lenisInstance.limit;
      const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;
      setScrollProgress(Math.max(0, Math.min(1, progress)));

      // Calculate scroll velocity
      const currentTime = performance.now();
      const deltaTime = (currentTime - lastTimeRef.current) / 1000; // Convert to seconds
      const currentScrollY = lenisInstance.scroll;
      const deltaScroll = currentScrollY - lastScrollYRef.current;
      const velocity = deltaTime > 0 ? deltaScroll / deltaTime : 0;
      
      setScrollVelocity(velocity);
      lastScrollYRef.current = currentScrollY;
      lastTimeRef.current = currentTime;

      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis, scrollProgress, scrollVelocity }}>
      {children}
    </LenisContext.Provider>
  );
}
