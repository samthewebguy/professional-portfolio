import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import FloatingDock from './FloatingDock';

const MobileNav = ({ isOpen, onClose }) => {

  const navContainerRef = useRef();

  useGSAP(() => {
    if (!isOpen) return;
    gsap.fromTo('.mobile-nav-item',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.1
      }
    );
  }, { scope: navContainerRef, dependencies: [isOpen] });

   if (!isOpen) return null; 

  return (
    <>
    <div ref={navContainerRef} className="w-full flexMobileNav fixed inset-0 z-40 bg-[#121212] md:hidden">
        <div className='absolute w-full h-full bg-[#121212] flex flex-col items-start justify-center  text-left text-5xl font-normal px-6'>
            <NavLink onClick={onClose} to="/about" className={({ isActive }) => `mobile-nav-item w-full p-4 hover:text-white leading-tight border-b hover:border-white transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1] border-[#4b4b4b]"}`}>About</NavLink>
            <NavLink onClick={onClose} to="/work" className={({ isActive }) => `mobile-nav-item w-full p-4 hover:text-white leading-tight border-b hover:border-white transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1] border-[#4b4b4b]"}`}>Work</NavLink>
            <NavLink onClick={onClose} to="/services" className={({ isActive }) => `mobile-nav-item w-full p-4 hover:text-white leading-tight border-b hover:border-white transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1] border-[#4b4b4b]"}`}>Services</NavLink>
            <NavLink onClick={onClose} to="/stack" className={({ isActive }) => `mobile-nav-item w-full p-4 hover:text-white leading-tight border-b hover:border-white transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1] border-[#4b4b4b]"}`}>Stack</NavLink>
        </div>
    </div>
    <FloatingDock isMobileMenu={true} />
    </>
  )
}

export default MobileNav