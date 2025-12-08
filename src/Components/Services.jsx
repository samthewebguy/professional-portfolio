import React, {useState} from 'react'
import {MyServices} from '../allServices'

const INITIAL_SERVICE_COUNT = 3;

const Services = () => {

  const [visibleCount, setVisibleCount] = useState(INITIAL_SERVICE_COUNT);

  const hasMoreServices = visibleCount < MyServices.length;

  const handleShowAll = (e) => {

    e.preventDefault();

    setVisibleCount(MyServices.length);

  };

  const servicesToShow = MyServices.slice(0, visibleCount); 

  return (
    <>
      <section className='w-full flex flex-col items-center justify-center mt-40 px-6'>
        <div className='w-full max-w-[680px] flex flex-row items-center justify-between text-left gap-6'>
          <h2 className='text-xl md:text-2xl text-[#a1a1a1] font-medium leading-tight'>what i do best</h2>
          <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>let me handle the technical stuff</p>
        </div>
        <div className='w-full max-w-[680px] flex flex-col items-center justify-center mt-10 gap-10'>
          {servicesToShow.map((service, index) => (
            <div key={index} className='group bg-[#4B4B4B1C] w-full flex flex-col md:flex-row items-start justify-start gap-6 p-6 rounded-3xl border border-[#4B4B4B80] hover:border-[#4b4b4bc2] shadow-sm shadow-[#000000]/20 transition-colors duration-300'>
              <img src={service.icon} alt={service.alt} className='bg-[rgba(75,75,75,0.07)] w-12 h-12 object-cover object-center rounded-full grayscale invert-0 group-hover:grayscale-0 transition duration-300 shadow-md shadow-[#000000]/20 p-1' />
              <div className='flex flex-col items-start justify-center text-left gap-2'>
                <h3 className='text-xl text-white font-normal leading-tight'>{service.title}</h3>
                <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
          <div className='w-full max-w-[680px] flex items-end justify-end gap-6 mt-6 text-center'>
            {hasMoreServices && (
            <button type='button' onClick={handleShowAll} target='_blank' className='cursor-pointer border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-lg font-medium transition duration-300'>show all services ({MyServices.length - visibleCount} more)
            </button>
            )}
          </div>
      </section>
      {/* Video Animation */}

      <section className='w-full flex items-center justify-center mt-16 px-6'>
        <div className='w-full max-w-[680px] flex items-center justify-center  rounded-2xl overflow-hidden shadow-2xl shadow-[#4b4b4b]/25  bg-[rgba(75,75,75,0.11)] border border-[#4b4b4b38]'>
        <iframe 
          className='rounded-2xl object-cover overflow-hidden'
          src="https://player.vimeo.com/video/1143432490?badge=0&controls=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" 
          width="608" 
          height="500"
          title="SAMTHEWEBGUY WORK"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{ border: 'none' }}
        >
        </iframe>
        </div>  
      </section>
    </>
  
  )
}

export default Services