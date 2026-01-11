'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import AnimatedHeading from './AnimatedHeading';

interface AdventurePhoto {
  src: string;
  alt: string;
  activity: string;
  location?: string;
}

interface AdventureSectionProps {
  photos: AdventurePhoto[];
}

export default function AdventureSection({ photos }: AdventureSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || typeof window === 'undefined') return;

    // @ts-ignore
    import('gsap/ScrollTrigger').then((ScrollTriggerModule: any) => {
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      photoRefs.current.forEach((photoRef, index) => {
        if (!photoRef) return;

        gsap.set(photoRef, {
          scale: 0.8,
          opacity: 0,
          y: 50,
        });

        gsap.to(photoRef, {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: photoRef,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.15,
        });
      });
    });
  }, [photos]);

  return (
    <section
      ref={sectionRef}
      id="adventure"
      className="min-h-screen w-full py-20 px-4 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedHeading className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
          Adventure & Thrills
        </AnimatedHeading>
        <p className="text-center text-white/70 text-lg mb-16 max-w-2xl mx-auto">
          When I'm not coding, I'm chasing adrenaline and exploring the world from new perspectives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              ref={(el) => {
                photoRefs.current[index] = el;
              }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gradient-to-br from-red-900/20 to-red-600/20"
            >
              {/* Background Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10" />
              {/* Text Content */}
              <div className="absolute inset-0 flex items-center justify-center z-20 p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{photo.activity}</h3>
                  {photo.location && (
                    <p className="text-white/80 text-sm drop-shadow-lg">{photo.location}</p>
                  )}
                </div>
              </div>
              {/* Fallback placeholder if image doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-900/20 to-red-600/20" style={{ display: 'none' }} id={`fallback-${index}`}>
                <div className="text-white/30 text-sm">Adventure Photo</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Add your adventure photos to{' '}
            <code className="bg-white/10 px-2 py-1 rounded text-red-400">
              public/images/adventure/
            </code>{' '}
            and update the filenames in{' '}
            <code className="bg-white/10 px-2 py-1 rounded text-red-400">
              app/page.tsx
            </code>
          </p>
        </div>
      </div>
    </section>
  );
}
