'use client';

import { memo, useMemo } from 'react';
import Canvas from './components/Canvas';
import SmoothScroll from './components/SmoothScroll';
import AnimatedProjectCard from './components/AnimatedProjectCard';
import AnimatedHeading from './components/AnimatedHeading';
import AdventureSection from './components/AdventureSection';

function Home() {
  // Memoize projects array to prevent unnecessary re-renders
  const projects = useMemo(() => [
    {
      title: 'Project 1',
      description: 'A brief description of your first project. Replace this with details about what you built, the challenges you faced, and the technologies you used.',
      technologies: ['React', 'TypeScript', 'Next.js'],
      projectUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of your second project. Highlight key features and your role in the development process.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      projectUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Project 3',
      description: 'A brief description of your third project. Showcase your skills and the impact of your work.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      projectUrl: '#',
      githubUrl: '#',
    },
  ], []);

  // Adventure photos - add your actual adventure photos here
  const adventurePhotos = useMemo(() => [
    {
      src: '/images/adventure/adv.jpeg',
      alt: 'Skydiving',
      activity: 'Skydiving',
      location: 'Interlaken, Switzerland',
    },
     {
      src: '/images/adventure/bungee.jpg',
      alt: 'bungee',
      activity: 'bungee Jumping',
      location: 'Whistler, Canada',
    },
     {
      src: '/images/adventure/Music.jpeg',
      alt: 'Music',
      activity: 'Music',
      location: 'Vancouver, Canada',
    }, {
      src: '/images/adventure/advent.jpeg',
      alt: 'Skydiving',
      activity: '',
      location: '',
    },
       {
      src: '/images/adventure/bungees.jpg',
      alt: 'bungee',
      activity: '',
      location: '',
    },{
      src: '/images/adventure/Musics.jpeg',
      alt: 'Music',
      activity: '',
      location: '',
    }
    
  ], []);

  return (
    <SmoothScroll>
      <Canvas totalProjects={projects.length} />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen w-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <div className="mb-6">
              <AnimatedHeading className="text-6xl md:text-8xl font-bold text-white">
                Welcome to My
              </AnimatedHeading>
              <AnimatedHeading className="text-6xl md:text-8xl font-bold text-red-500 block" delay={0.2}>
                Portfolio
              </AnimatedHeading>
            </div>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Full Stack Developer & Creative Problem Solver
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold border border-white/20 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="h-screen w-full flex items-center justify-center px-4 bg-black/30 backdrop-blur-sm">
          <div className="max-w-4xl text-center">
            <AnimatedHeading className="text-5xl md:text-6xl font-bold text-white mb-8">
              About Me
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
              I'm a passionate developer who loves building innovative solutions
              and bringing ideas to life through code. With expertise in modern
              web technologies, I create seamless user experiences and robust
              applications.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              When I'm not coding, you'll find me following Formula 1 races,
              especially the Ferrari Scuderia team. The precision, speed, and
              innovation in F1 racing inspire my approach to software
              development.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen w-full py-20 px-4 bg-black/40 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <AnimatedHeading className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
              Featured Projects
            </AnimatedHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedProjectCard key={index} {...project} index={index} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-white/60 text-sm mb-4">
                Add more projects by editing the projects array in{' '}
                <code className="bg-white/10 px-2 py-1 rounded text-red-400">
                  app/page.tsx
                </code>
              </p>
            </div>
          </div>
        </section>

        {/* Adventure Section */}
        <AdventureSection photos={adventurePhotos} />

        {/* Contact Section */}
        <section
          id="contact"
          className="h-screen w-full flex items-center justify-center px-4 bg-black/30 backdrop-blur-sm"
        >
          <div className="max-w-2xl text-center">
            <AnimatedHeading className="text-5xl md:text-6xl font-bold text-white mb-8">
              Get In Touch
            </AnimatedHeading>
            <p className="text-lg md:text-xl text-white/80 mb-12">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
              >
                Send Email
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold border border-white/20 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold border border-white/20 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </SmoothScroll>
  );
}

export default memo(Home);
