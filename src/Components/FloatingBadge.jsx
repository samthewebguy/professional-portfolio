import React from 'react'
import SquarespaceBadge from '../assets/CircleTier_Member_White-Gold@2x.webp'

const FloatingBadge = () => {
  return (
    <div className='fixed bottom-4 right-4 w-40 h-20 object-cover  items-center z-50'>
        <img src={SquarespaceBadge} alt="Squarespace circle gold partner badge" className='bg-[#4b4b4b] px-4 py-2 rounded-sm' />
    </div>
  )
}

export default FloatingBadge