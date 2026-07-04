import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import SiteLogo from '../assets/Site Logo/Samthewebguy.png'
import HamburgerIcon from '../assets/Mobile+Hamburger+Icon.png'
import MobileNav from './MobileNav'

const Header = ({ hasLoaded }) => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Set the hidden starting state once, immediately on mount —
  // so there's nothing to "flash" before the loader clears.
  useGSAP(() => {
    gsap.set('.nav-item-fade', { opacity: 0, y: -10 });
  }, { scope: headerRef });

  // Play the reveal only once hasLoaded flips true (loader has fully lifted)
  useGSAP(() => {
    if (!hasLoaded) return;

    gsap.to('.nav-item-fade', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
    });
  }, { dependencies: [hasLoaded], scope: headerRef });

  return (
    <>
      <header ref={headerRef} className='fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center pt-12 px-6'>
          <nav className='w-full max-w-[608px] bg-[#121212] flex items-center justify-between py-4 px-8 border border-[#4b4b4b] rounded-full shadow-lg shadow-[#4b4b4b]/15 hover:shadow-[#4b4b4b]/25'>
              <a className='nav-item-fade Logo w-40 h-5 flex items-center justify-start' href='/'>
                  <img src={SiteLogo} alt="SAMTHEWEBGUY logo" />
              </a>
              <div className='DesktopNav hidden md:flex flex-row items-center justify-center gap-2 text-sm text-[#A1A1A1] font-normal'>
                  <NavLink to="/about" className={({ isActive }) => `nav-item-fade pl-2 pr-4 border-r border-[#a1a1a1] hover:text-white leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1]"}`}>About</NavLink>
                  <NavLink to="/work" className={({ isActive }) => `nav-item-fade px-4 border-r border-[#a1a1a1] hover:text-white leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1]"}`}>Work</NavLink>
                  <NavLink to="/services" className={({ isActive }) => `nav-item-fade pl-2 pr-4 border-r border-[#a1a1a1] hover:text-white leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1]"}`}>Services</NavLink>
                  <NavLink to="/stack" className={({ isActive }) => `nav-item-fade pl-2 pr-2 border border-transparent hover:text-white leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1]"}`}>Stack</NavLink>
              </div>
              <div className="nav-item-fade md:hidden">
                <div onClick={() => setMobileOpen(!mobileOpen)}
                  className={`transition-transform duration-300 ease-in-out flex items-center justify-center cursor-pointer ${mobileOpen ? "rotate-90" : "rotate-0"}`}
                >
                  <img src={HamburgerIcon} alt="Mobile menu hamburger icon" className='w-6 h-6 object-contain' />
                </div>
              </div>
          </nav>
      </header>
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
   </>
  )
}

export default Header