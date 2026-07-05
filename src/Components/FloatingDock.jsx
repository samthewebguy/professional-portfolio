import React, { useState, useEffect, useRef } from 'react';

const FloatingDock = ({ isMobileMenu = false }) => {
  const [isVisible, setIsVisible] = useState(isMobileMenu);
  // Keep track of the last scroll position to calculate direction
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (isMobileMenu) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Always hide when near the very top of the page
      if (currentScrollY < 100) {
        setIsVisible(false);
      } 
      // 2. If scrolling DOWN, hide the dock to uncover project CTAs
      else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } 
      // 3. If scrolling UP, smoothly bring the dock back into view
      else {
        setIsVisible(true);
      }

      // Update the reference with the current position for the next frame
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenu]);

  const handleScrollToCal = (e) => {
    e.preventDefault();
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 px-4 w-auto transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'opacity-100 transform translate-y-0 pointer-events-auto' 
          : 'opacity-0 transform translate-y-10 pointer-events-none'
      }`}
    >
      <div className="flex flex-row items-center justify-between gap-6 px-6 py-3 rounded-full bg-[#121212]/80 backdrop-blur-md border border-[#4B4B4B4D] shadow-xl shadow-black/40">
        
        {/* Social Links Layout */}
        <div className="flex flex-row items-center gap-5">
          {/* X Profile */}
          <a 
            href="https://x.com/ReachSAMonX" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#a1a1a1] hover:text-white transition-colors duration-200"
            aria-label="X Profile"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* GitHub Profile */}
          <a 
            href="https://github.com/samthewebguy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#a1a1a1] hover:text-white transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>

          {/* LinkedIn Profile */}
          <a 
            href="https://www.linkedin.com/in/samthewebguy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#a1a1a1] hover:text-white transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <div className="h-5 w-px bg-[#4B4B4B80]" />

        {/* Call to Action */}
        <a
          href="#consultation"
          onClick={handleScrollToCal}
          className="px-5 py-2 text-sm font-medium tracking-tight text-black bg-white hover:bg-neutral-200 active:scale-98 rounded-full transition-all duration-200 select-none whitespace-nowrap"
        >
          Book a call
        </a>

      </div>
    </div>
  );
};

export default FloatingDock;