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
        <div className='w-full max-w-[680px] flex flex-row items-center justify-between gap-6'>
          <h2 className='text-2xl text-[#a1a1a1] font-medium leading-tight'>What I Do Best</h2>
          <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>Let me handle the technical stuff</p>
        </div>
        <div className='w-full max-w-[680px] flex flex-col items-center justify-center mt-10 gap-10'>
          {servicesToShow.map((service, index) => (
            <div key={index} className='group bg-[#4B4B4B1C] w-full flex flex-row items-start justify-start gap-6 p-6 rounded-3xl border border-[#4B4B4B80] hover:border-[#4b4b4bc2] shadow-sm shadow-[#000000]/20 transition-colors duration-300'>
              <img src={service.icon} alt={service.alt} className='bg-[rgba(75,75,75,0.07)] w-12 h-12 object-cover object-center rounded-full grayscale-0 md:grayscale md:invert-0 group-hover:grayscale-0 transition duration-300 shadow-md shadow-[#000000]/20 p-1' />
              <div className='flex flex-col items-start justify-center text-left gap-2'>
                <h3 className='text-xl text-white font-normal leading-tight'>{service.title}</h3>
                <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More CTA */}

          <div className='w-full max-w-[680px] flex items-end justify-end gap-6 mt-6 text-center'>
            {hasMoreServices && (
            <button type='button' onClick={handleShowAll} target='_blank' className='cursor-pointer border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-lg font-medium transition duration-300'>Show All Services ({MyServices.length - visibleCount} More)
            </button>
            )}
          </div>
      </section>
    </>
  
  )
}

export default Services