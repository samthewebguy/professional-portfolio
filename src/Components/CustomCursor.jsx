import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    // Hidden by default to avoid components jumping to (0,0) on initial page load
    gsap.set([dot, ring], { opacity: 0 });

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      // 1. Instant precision alignment for the inner solid dot
      gsap.to(dot, {
        x: x,
        y: y,
        duration: 0, // Zero latency response
        opacity: 1
      });

      // 2. Smooth trailing latency (inertia) for the outer geometric ring
      gsap.to(ring, {
        x: x,
        y: y,
        duration: 0.4, // Adjust this value to control the smooth drag feel
        ease: 'power2.out',
        opacity: 1
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Precision Core Dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffffff6a] hidden md:block"
      />
      
      <div
        ref={cursorRingRef}
        className="pointer-events-none fixed left-0 top-0 z-9999 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#595959cf] hidden md:block"
      />
    </>
  );
};

export default CustomCursor;