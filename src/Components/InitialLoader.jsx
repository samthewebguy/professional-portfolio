import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function InitialLoader({ onComplete }) {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete()
    });

    // Initial setup: text hidden behind clip mask
    gsap.set(textContainerRef.current, { clipPath: 'inset(0 100% 0 0)' });

    const revealDuration = 2.5;

    // Smooth typographic text reveal from left to right
    tl.to(textContainerRef.current, {
      clipPath: 'inset(0 0% 0 0)',
      duration: revealDuration,
      ease: 'power3.inOut' 
    }, 0);

    // Clean viewport slide up transition to reveal your page content
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
      delay: 0.4
    }, revealDuration);

  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#121212] overflow-hidden select-none"
    >
      <div className="relative flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl">
        
        {/* Typographic Mask */}
        <div ref={textContainerRef} className="will-change-[clip-path]">
          <h1 className="text-5xl md:text-9xl font-md tracking-tighter text-white uppercase font-sans">
            SAMTHEWEBGUY
          </h1>
          <p className="text-sm md:text-sm font-sans tracking-widest text-[#a1a1a1] uppercase mt-3 ">
            Web Developer & Systems Builder
          </p>
        </div>

      </div>
    </div>
  );
}