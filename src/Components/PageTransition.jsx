import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function PageTransition() {
  const { pathname } = useLocation();
  const overlayRef = useRef(null);

  useEffect(() => {
    // 1. Force scroll to top instantly
    window.scrollTo(0, 0);

    // 2. Reset panel to cover the screen instantly, then slide it out of view
    gsap.timeline()
      .set(overlayRef.current, { yPercent: 0 }) 
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: 'power3.inOut',
        delay: 0.05
      });
  }, [pathname]);

  return (
    <div 
      ref={overlayRef} 
      className="fixed inset-0 bg-[#121212] pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}