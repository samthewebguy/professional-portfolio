import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function InitialLoader({ onComplete }) {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const ballRef = useRef(null);
  const leftLegRef = useRef(null);
  const rightLegRef = useRef(null);
  const characterTrackRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete()
    });

    // Initial setup: text hidden, character starts off-screen left
    gsap.set(textContainerRef.current, { clipPath: 'inset(0 100% 0 0)' });
    gsap.set(characterTrackRef.current, { x: '0vw' });
    gsap.set(ballRef.current, { x: 0, y: 0, rotation: 0 });
    
    // Set hip pivot points for both legs
    gsap.set(rightLegRef.current, { rotation: 0, transformOrigin: "20% 10%" });
    gsap.set(leftLegRef.current, { rotation: 0, transformOrigin: "20% 10%" });

    const totalJuggleTime = 4.0; // Slightly longer to appreciate the footwork
    const juggleCycles = 8; // 8 total kicks (4 right, 4 left)
    const cycleDuration = totalJuggleTime / juggleCycles;

    // 1. Move the entire system across horizontally
    tl.to(characterTrackRef.current, {
      x: '105vw',
      duration: totalJuggleTime,
      ease: 'none'
    }, 0);

    // Sync the typographic text reveal
    tl.to(textContainerRef.current, {
      clipPath: 'inset(0 0% 0 0)',
      duration: totalJuggleTime - 0.2,
      ease: 'none'
    }, 0.1);

    // 2. Alternating Kick Loop
    for (let i = 0; i < juggleCycles; i++) {
      const startTime = i * cycleDuration;
      const isRightFoot = i % 2 === 0; // Alternates every cycle
      const activeLeg = isRightFoot ? rightLegRef.current : leftLegRef.current;
      
      // Shift ball horizontally a tiny bit so it goes toward the active foot
      const ballXTarget = isRightFoot ? 15 : -15;

      // Leg snaps up to kick
      tl.to(activeLeg, {
        rotation: isRightFoot ? -35 : 35, // Right kicks forward/up, Left kicks backward/up relative to orientation
        duration: 0.08,
        ease: 'power2.out'
      }, startTime);

      // Ball physics arc (up and slightly side-to-side between feet)
      tl.to(ballRef.current, {
        y: -50,
        x: ballXTarget,
        rotation: isRightFoot ? '+=90' : '-=90',
        duration: cycleDuration * 0.4,
        ease: 'power1.out'
      }, startTime + 0.04);

      // Leg returns to resting position
      tl.to(activeLeg, {
        rotation: 0,
        duration: 0.12,
        ease: 'power1.in'
      }, startTime + 0.1);

      // Ball drops back down to meet the next foot position
      tl.to(ballRef.current, {
        y: 0,
        duration: cycleDuration * 0.6,
        ease: 'power1.in'
      }, startTime + 0.04 + (cycleDuration * 0.4));
    }

    // 3. Clean transition out right when hitting the letter Y
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: 'power4.inOut',
      delay: 0.3
    }, totalJuggleTime);

  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#f8f6f4] overflow-hidden select-none"
    >
      <div className="relative flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl">
        
        {/* Typographic Mask */}
        <div ref={textContainerRef} className="will-change-[clip-path]">
          <h1 className="text-4xl md:text-9xl font-md tracking-tighter text-[#111] uppercase font-sans">
            SAMTHEWEBGUY
          </h1>
          <p className="text-sm md:text-sm font-mono tracking-widest text-neutral-500 uppercase mt-3">
            Web Developer & Systems Builder
          </p>
        </div>

        {/* Juggling Track Container */}
        <div 
          ref={characterTrackRef} 
          className="absolute -left-[10vw] bottom-[-60px] w-32 h-28 pointer-events-none"
        >
          {/* Stick Figure */}
          <svg viewBox="0 0 100 120" className="absolute left-0 bottom-0 w-20 h-24 stroke-[#111] fill-none stroke-[6] stroke-linecap-round stroke-linejoin-round">
            {/* Head & Torso */}
            <circle cx="50" cy="25" r="10" className="fill-[#111]" />
            <line x1="50" y1="35" x2="50" y2="68" />
            
            {/* Left Leg Group */}
            <g ref={leftLegRef}>
              <path d="M50 68 L40 90 L30 110" />
            </g>

            {/* Right Leg Group */}
            <g ref={rightLegRef}>
              <path d="M50 68 L60 90 L75 110" />
            </g>
            
            {/* Balanced Arms */}
            <path d="M50 42 L25 50 L15 45" />
            <path d="M50 42 L75 50 L85 45" />
          </svg>

          {/* Juggling Football */}
          <div ref={ballRef} className="absolute left-[34px] bottom-5 w-5 h-5">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-[#111] stroke-[2.5]">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2 C12 2 9 6 12 10 C15 6 12 2 12 2 Z" />
              <path d="M12 22 C12 22 9 18 12 14 C15 18 12 22 12 22 Z" />
            </svg>
          </div>

        </div>

      </div>
    </div>
  );
}