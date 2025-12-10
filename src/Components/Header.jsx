import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SiteLogo from '../assets/Site Logo/Samthewebguy_White_TP.svg'
import HamburgerIcon from '../assets/Mobile+Hamburger+Icon.png'
import MobileNav from './MobileNav'

const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

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


  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center pt-12 px-6'>
          <nav className='w-full max-w-[608px] bg-[#121212] flex items-center justify-between py-4 px-8 border border-[#4b4b4b] rounded-full shadow-lg shadow-[#4b4b4b]/15 hover:shadow-[#4b4b4b]/25'>
              <a className='Logo w-full h-5 flex items-center justify-start' href='/'>
                  <img src={SiteLogo} alt="SAMTHEWEBGUY logo" />
              </a>
              <div className='DesktopNav hidden md:flex flex-row items-center justify-center gap-2 text-sm text-[#A1A1A1] font-normal'>
                  <NavLink to="/work" className={({ isActive }) => `px-4 border-r border-[#a1a1a1] hover:text-white leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1]"}`}>work</NavLink>
                  <NavLink to="/services" className={({ isActive }) => `pl-2 pr-4 border-r border-[#a1a1a1] hover:text-white leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1]"}`}>services</NavLink>
                  <NavLink to="/about" className={({ isActive }) => `pl-2 pr-4 border-r border-[#a1a1a1] hover:text-white leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1]"}`}>about</NavLink>
                  <NavLink to="/stack" className={({ isActive }) => `pl-2 pr-2 border border-transparent hover:text-white leading-tight transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1]"}`}>stack</NavLink>
              </div>
              <div onClick={() => setMobileOpen(true)} className={`transition-transform duration-300 ease-in-out flex items-center justify-center md:hidden cursor-pointer ${mobileOpen ? "rotate-90" : "rotate-0"}`}>
                <img src={HamburgerIcon} alt="Mobile menu hamburger icon" className='w-6 h-6 object-contain' />
              </div>
          </nav>
      </header>
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
   </>
  )
}

export default Header