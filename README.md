# Portfolio Website

A modern portfolio website built with Next.js, React Three Fiber, and Lenis smooth scrolling. Features an animated Ferrari F1 car that floats and moves as you scroll through the sections.

## Features

- Next.js App Router with TypeScript
- Fullscreen sections stacked vertically (Hero, About, Projects, Contact)
- Tailwind CSS for modern, responsive layout
- Fixed react-three-fiber canvas covering the viewport
- Lenis smooth scrolling wired globally with scroll progress and velocity hooks
- **3D Ferrari F1 Car** that animates based on scroll progress
- Project showcase section with placeholder cards
- Dark theme with Ferrari-inspired red accents

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router directory
  - `components/` - React components
    - `Canvas.tsx` - Fixed react-three-fiber canvas
    - `Scene.tsx` - Three.js scene with lighting and environment
    - `F1Car.tsx` - 3D Ferrari F1 car component with scroll-based animation
    - `ProjectCard.tsx` - Reusable project card component
    - `SmoothScroll.tsx` - Lenis smooth scrolling wrapper
  - `contexts/` - React contexts
    - `LenisContext.tsx` - Global Lenis context with scroll progress and velocity
  - `hooks/` - Custom React hooks
    - `useLenis.ts` - Hook to access scroll progress and velocity
  - `page.tsx` - Main page with portfolio sections
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles with Tailwind

## Adding Your Projects

Edit the `projects` array in `app/page.tsx` to add your own projects:

```tsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'TypeScript', 'Next.js'],
    projectUrl: 'https://your-project-url.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  // Add more projects...
];
```

## Customization

- Update contact links in the Contact section (`app/page.tsx`)
- Modify F1 car animation in `app/components/F1Car.tsx`
- Adjust colors and styling in `app/globals.css` and Tailwind classes
- Customize scroll behavior in `app/contexts/LenisContext.tsx`
