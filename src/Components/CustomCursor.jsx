import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorLabelRef = useRef(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const label = cursorLabelRef.current;

    gsap.set([dot, label], { opacity: 0 });

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(dot, {
        x: x,
        y: y,
        duration: 0,
        opacity: 1
      });

      // Only animate the label to follow the mouse if it hasn't been hidden by a hover state
      if (label.getAttribute('data-hovering') !== 'true') {
        gsap.to(label, {
          x: x + 12,
          y: y + 12,
          duration: 0.25,
          ease: 'power2.out',
          opacity: 1
        });
      } else {
        // Keep its position updating smoothly even while hidden so it doesn't jump when it reappears
        gsap.set(label, { x: x + 12, y: y + 12 });
      }
    };

    // Shrink and hide the badge when hovering over interactive elements
    const handleMouseEnterLink = () => {
      label.setAttribute('data-hovering', 'true');
      gsap.to(label, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.inOut'
      });
      // Optional: slightly grow or brighten the lead dot for a precision hover state
      gsap.to(dot, { scale: 1.5, backgroundColor: '#ffffff', duration: 0.2 });
    };

    // Bring the badge back when leaving the link
    const handleMouseLeaveLink = () => {
      label.setAttribute('data-hovering', 'false');
      gsap.to(label, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
      gsap.to(dot, { scale: 1, backgroundColor: '#f8f6f4', duration: 0.2 });
    };

    window.addEventListener('mousemove', moveCursor);

    // Attach listeners globally using event delegation
    const attachHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
      targets.forEach(target => {
        target.addEventListener('mouseenter', handleMouseEnterLink);
        target.addEventListener('mouseleave', handleMouseLeaveLink);
      });
    };

    // Run initially
    attachHoverListeners();

    // a MutationObserver watches for DOM changes and re-attaches listeners automatically.
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      const targets = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
      targets.forEach(target => {
        target.removeEventListener('mouseenter', handleMouseEnterLink);
        target.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Lead Precision Core Dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed left-0 top-0 z-9999 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f8f6f4] hidden md:block"
      />
      
      {/* Trailing Capsule Flag (Disappears on hover) */}
      <div
        ref={cursorLabelRef}
        className="pointer-events-none fixed left-0 top-0 z-9999 flex items-center justify-center px-3 py-1 rounded-full rounded-tl-none bg-[#f8f6f4] shadow-lg shadow-black/30 hidden md:block origin-top-left"
      >
        <span className="text-[10px] font-bold tracking-wider text-[#121212] select-none uppercase font-mono">
          YOU
        </span>
      </div>
    </>
  );
};

export default CustomCursor;