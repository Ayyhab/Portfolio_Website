# Portfolio Website

A modern portfolio website built with Next.js, React Three Fiber, and Lenis smooth scrolling.

## Features

- Next.js App Router
- Fullscreen sections stacked vertically
- Tailwind CSS for layout
- Fixed react-three-fiber canvas covering the viewport
- Lenis smooth scrolling wired globally

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
    - `SmoothScroll.tsx` - Lenis smooth scrolling wrapper
  - `page.tsx` - Main page with fullscreen sections
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles with Tailwind
