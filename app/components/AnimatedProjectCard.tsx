'use client';

import { useRef, useEffect } from 'react';
// @ts-ignore - GSAP types will be available after npm install
import gsap from 'gsap';
import { splitTextIntoLetters } from '../utils/textSplitter';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  index?: number;
}

export default function AnimatedProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imageRef.current || !titleRef.current || typeof window === 'undefined') return;

      // Dynamically import and register ScrollTrigger
      // @ts-ignore - GSAP types will be available after npm install
      import('gsap/ScrollTrigger').then((ScrollTriggerModule: any) => {
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      const titleLetters = titleRef.current?.querySelectorAll('span span');
      if (!titleLetters) return;

      // Set initial states
      gsap.set(cardRef.current, {
        y: 60,
        opacity: 0,
      });

      gsap.set(imageRef.current, {
        z: -20,
        scale: 0.95,
      });

      gsap.set(titleLetters, {
        y: '100%',
        opacity: 0,
      });

      // Create scroll trigger animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none none',
        },
      });

      // Animate card upward
      tl.to(cardRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.1,
      })
        // Animate image depth
        .to(
          imageRef.current,
          {
            z: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        // Animate title letters
        .to(
          titleLetters,
          {
            y: '0%',
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.03,
          },
          '-=0.4'
        );
    });

    return () => {
      // Cleanup handled by timeline kill
    };
  }, [title, index]);

  const titleLetters = splitTextIntoLetters(title);

  return (
    <div
      ref={cardRef}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group"
    >
      {imageUrl && (
        <div
          ref={imageRef}
          className="w-full h-48 bg-gradient-to-br from-red-900/20 to-red-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-white/30 text-sm">Project Image</div>
        </div>
      )}
      <h3
        ref={titleRef}
        className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors overflow-hidden"
      >
        {titleLetters}
      </h3>
      <p className="text-white/70 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
          >
            View Project
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg border border-white/20 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
