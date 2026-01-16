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
      title: 'Nerva - AI-Powered CRM Platform',
  description:
    'Built a privacy-first, AI-powered CRM that uses a Gemini-based LLM to extract structured customer data, perform intent detection, and automate real-time updates to Firebase—reducing manual CRM work by 60%.',
  technologies: [
    'Next.js',
    'TypeScript',
    'Gemini LLM',
    'Firebase',
    'Google Cloud OAuth',
    'NLP',
    'Speech-to-Text',
    'HTML5',
    'CSS3'
  ],
      projectUrl: 'https://www.youtube.com/watch?v=L6391NB274o',
      githubUrl: 'https://github.com/eteen12/realtor-sass',
    },
    {
      title: 'EduAI - Academic Research Platform',
      description: 'Built a scalable academic research platform with C#/.NET REST APIs, PostgreSQL (pgvector), and Prisma, using Dockerized services to streamline development and reduce onboarding time by 30%.',
      technologies: [
          'C#',
          '.NET',
          'PostgreSQL',
          'pgvector',
          'Prisma',
          'Docker',
          'REST APIs'
        ],
      projectUrl: 'https://eduai-website-git-main-ayyhabs-projects.vercel.app/',
      githubUrl: 'https://eduai-website-git-main-ayyhabs-projects.vercel.app/',
    },
    {
  title: 'EvoTrade - AI Investment Platform',
  description:
    'Developed and tested production features for an AI-powered investment platform, building React interfaces from Figma designs, integrating REST APIs with Redux state management, and supporting CI/CD workflows in a Linux-based Docker environment.',
  technologies: [
    'React',
    'Redux',
    'REST APIs',
    'Docker',
    'Linux',
    'CI/CD',
    'Figma'
  ],
  projectUrl: 'https://github.com/sbinkader/EvoTrade',
  githubUrl: 'https://github.com/sbinkader/EvoTrade',
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
  I’m a curious builder at heart — currently a year ahead in my studies — who enjoys going off the beaten path to understand how things actually work. I’ve had the opportunity to work closely with professors on research-driven development, contribute to experimental ideas, and represent innovation-focused communities as an MIT Hack the Nation Ambassador. Along the way, I founded a startup to turn ideas into real, deployable systems, not just concepts on paper.
</p>

<p className="text-lg md:text-xl text-white/80 leading-relaxed">
  I enjoy learning independently, exploring new technologies on my own, and figuring things out as I go — whether that means shipping a product solo or collaborating with a team to bring something larger to life. Outside of building, you’ll usually find me playing guitar, singing, hiking, chasing adventure, or watching (and occasionally playing) football. I’m driven by curiosity, momentum, and the excitement of creating things that feel alive.
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
