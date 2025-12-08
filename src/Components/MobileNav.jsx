import React from 'react'
import { NavLink } from 'react-router-dom';

const MobileNav = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
  return (
    <div className="w-full flexMobileNav fixed inset-0 z-40 bg-[#121212] md:hidden">
        <div className='absolute w-full h-full bg-[#121212] flex flex-col items-start justify-center  text-left text-5xl font-normal px-6'>
            <NavLink onClick={onClose} to="/work" className={({ isActive }) => `w-full p-4 hover:text-white leading-tight border-b hover:border-white transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1] border-[#4b4b4b]"}`}>work</NavLink>
            <NavLink onClick={onClose} to="/services" className={({ isActive }) => `w-full p-4 hover:text-white leading-tight border-b hover:border-white transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1] border-[#4b4b4b]"}`}>services</NavLink>
            <NavLink onClick={onClose} to="/about" className={({ isActive }) => `w-full p-4 hover:text-white leading-tight border-b hover:border-white transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1] border-[#4b4b4b]"}`}>about</NavLink>
            <NavLink onClick={onClose} to="/stack" className={({ isActive }) => `w-full p-4 hover:text-white leading-tight border-b hover:border-white transition-colors duration-300 ${isActive ? "text-white" : "text-[#A1A1A1] border-[#4b4b4b]"}`}>stack</NavLink>
        </div>
    </div>
  )
}

export default MobileNav