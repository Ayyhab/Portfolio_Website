'use client';

import { useState, useEffect } from 'react';
import { useLenis } from './useLenis';

export function useActiveProject(totalProjects: number) {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const { lenis } = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (!projectsSection) return;

      const sectionTop = projectsSection.offsetTop;
      const sectionHeight = projectsSection.offsetHeight;
      const scrollY = lenis.scroll;
      const viewportHeight = window.innerHeight;

      // Calculate which project is in view
      const scrollProgress = (scrollY - sectionTop + viewportHeight * 0.5) / sectionHeight;
      
      if (scrollProgress < 0 || scrollProgress > 1) {
        setActiveProjectIndex(null);
        return;
      }

      // Determine active project based on scroll position
      const projectProgress = scrollProgress * totalProjects;
      const activeIndex = Math.floor(projectProgress);
      
      if (activeIndex >= 0 && activeIndex < totalProjects) {
        setActiveProjectIndex(activeIndex);
      } else {
        setActiveProjectIndex(null);
      }
    };

    // Listen to Lenis scroll events
    lenis.on('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis, totalProjects]);

  return activeProjectIndex;
}
