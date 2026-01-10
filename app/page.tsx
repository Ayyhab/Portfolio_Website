'use client';

import Canvas from './components/Canvas';
import SmoothScroll from './components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <Canvas />
      <div className="relative z-10">
        <section className="h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Section 1</h1>
          </div>
        </section>
        <section className="h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Section 2</h1>
          </div>
        </section>
        <section className="h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Section 3</h1>
          </div>
        </section>
      </div>
    </SmoothScroll>
  );
}
