import React from 'react'
import SquarespaceBadge from '../assets/CircleTier_Member_White-Gold@2x.webp'

const FloatingBadge = ({ isMobileMenuOpen = false }) => {
  
  if (isMobileMenuOpen) return null;

  return (
    
    <div className='fixed bottom-4 right-4 w-40 z-50 pointer-events-none hidden md:block'>
        <img 
          src={SquarespaceBadge} 
          alt="Squarespace circle gold partner badge" 
          className='bg-[#121212]/90 border border-[#4B4B4B4D] backdrop-blur-sm px-4 py-2 rounded-xl object-contain shadow-lg' 
        />
    </div>
  )
}

export default FloatingBadge