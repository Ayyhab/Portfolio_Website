'use client';

import { useRef, useEffect } from 'react';
// @ts-ignore - GSAP types will be available after npm install
import gsap from 'gsap';
import { splitTextIntoLetters } from '../utils/textSplitter';

interface AnimatedHeadingProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function AnimatedHeading({
  children,
  className = '',
  delay = 0,
  stagger = 0.02,
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const letters = splitTextIntoLetters(children);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    // Dynamically import and register ScrollTrigger
    // @ts-ignore - GSAP types will be available after npm install
    import('gsap/ScrollTrigger').then((ScrollTriggerModule: any) => {
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      const letterSpans = containerRef.current?.querySelectorAll('span span');
      if (!letterSpans) return;
      
      // Set initial state
      gsap.set(letterSpans, {
        y: '120%',
        opacity: 0,
      });

      // Animate on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });

      tl.to(letterSpans, {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: stagger,
        delay: delay,
      });

      timelineRef.current = tl;
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [children, delay, stagger]);

  return (
    <h2 ref={containerRef} className={className}>
      {letters}
    </h2>
  );
}
