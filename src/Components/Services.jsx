import React, { useState, useRef } from 'react'
import { MyServices } from '../allServices'
import Testimonial from './Testimonial'

// 1. Import the necessary GSAP utilities
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INITIAL_SERVICE_COUNT = 3;

const Services = ({showTestimonial}) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_SERVICE_COUNT);
  
  // 2. Setup a container ref to scope the animations
  const servicesContainerRef = useRef();

  const hasMoreServices = visibleCount < MyServices.length;

  const handleShowAll = (e) => {
    e.preventDefault();
    setVisibleCount(MyServices.length);
  };

  const servicesToShow = MyServices.slice(0, visibleCount); 

  // 3. Track visibleCount so GSAP catches newly injected elements instantly
  useGSAP(() => {
    const serviceItems = gsap.utils.toArray('.service-card-item');

    // Clean up old triggers so they don't stack up in memory on click
    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger && t.trigger.classList.contains('service-card-item')) {
        t.kill();
      }
    });

    // Animate each item independently as it rolls into the viewport
    serviceItems.forEach((item) => {
      gsap.fromTo(item, 
        { 
          opacity: 0, 
          y: 40 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

  }, { dependencies: [visibleCount], scope: servicesContainerRef });

  return (
    <>
      <section className='w-full flex flex-col items-center justify-center mt-40 px-6'>
        <div className='w-full max-w-[680px] flex flex-row items-center justify-between gap-8'>
          <h2 className='text-xl md:text-2xl text-[#a1a1a1] font-medium leading-tight'>What I Do Best</h2>
          <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>Let me handle the technical stuff for you</p>
        </div>
        
        
        <div ref={servicesContainerRef} className='w-full max-w-[680px] flex flex-col items-center justify-center mt-10 gap-10'>
          {servicesToShow.map((service, index) => (
            
            <div key={index} className='service-card-item group bg-[#4B4B4B1C] w-full flex flex-row items-start justify-start gap-6 p-6 rounded-3xl border border-[#4B4B4B80] hover:border-[#4b4b4bc2] shadow-sm shadow-[#000000]/20 transition-colors duration-300'>
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
            <button type='button' onClick={handleShowAll} className='cursor-pointer border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-md font-medium transition duration-300'>Show All Services ({MyServices.length - visibleCount} More)
            </button>
          )}
        </div>
      </section>

      {/* Testimonial */}

      {showTestimonial && <Testimonial />}
    </>
  )
}

export default Services