import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LogoIcon from '../assets/logo-icon.svg';

export default function InitialLoader({ onComplete }) {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const iconTrackRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete()
    });

    const revealDuration = 2.8;

    // Get the exact width of your typographic text block to calculate the travel limits
    const textWidth = textContainerRef.current.offsetWidth || 600;
    const startX = -textWidth / 2;
    const endX = textWidth / 2;

    // Initial setup
    gsap.set(textContainerRef.current, { clipPath: 'inset(0 100% 0 0)' });
    gsap.set(iconRef.current, { x: startX, y: 0, opacity: 1, rotation: 0 });

    // 1. Text reveal (Your original timing setup)
    tl.to(textContainerRef.current, {
      clipPath: 'inset(0 0% 0 0)',
      duration: revealDuration,
      ease: 'none'
    }, 0.1);

    // 2. Horizontal sweep from left edge to right edge
    tl.to(iconRef.current, {
      x: endX,
      duration: revealDuration,
      ease: 'none' 
    }, 0.1);

    const totalBounces = 5; 
    const singleBounceDuration = revealDuration / totalBounces;

    for (let i = 0; i < totalBounces; i++) {
      const startTime = 0.1 + (i * singleBounceDuration);

      // Arc Up
      tl.to(iconRef.current, {
        y: -40,
        duration: singleBounceDuration * 0.4,
        ease: 'power1.out'
      }, startTime);

      // Snap Down to the floor line
      tl.to(iconRef.current, {
        y: 0,
        duration: singleBounceDuration * 0.6,
        ease: 'power1.in'
      }, startTime + (singleBounceDuration * 0.4));
    }

    // 4. Continuous rotational roll matching the travel direction
    tl.to(iconRef.current, {
      rotation: 720,
      duration: revealDuration,
      ease: 'none'
    }, 0.1);

    // 5. Clean viewport slide up transition to reveal your page content
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: 'power4.inOut',
      delay: 0.3
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
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-md tracking-tighter text-white uppercase font-sans">
            SAMTHEWEBGUY
          </h1>
          <p className="text-sm md:text-sm font-sans tracking-widest text-[#a1a1a1] uppercase mt-3">
            Web Developer & Systems Builder
          </p>
        </div>

        {/* Dynamic Wave Icon Track */}
        <div ref={iconTrackRef} className="w-full flex items-center justify-center mt-8 overflow-visible">
          <img 
            ref={iconRef}
            src={LogoIcon} 
            alt="" 
            className="w-30 h-30 md:w-40 md:h-40 will-change-transform" 
          />
        </div>

      </div>
    </div>
  );
}