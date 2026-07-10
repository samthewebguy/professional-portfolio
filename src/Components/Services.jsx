import React, { useState, useRef } from 'react'
import { MyServices } from '../allServices'
import Testimonial from './Testimonial'

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INITIAL_SERVICE_COUNT = 3;

const Services = ({ showTestimonial, hasLoaded }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_SERVICE_COUNT);
  const sectionRef = useRef();
  const animatedIndexesRef = useRef(new Set());

  const hasMoreServices = visibleCount < MyServices.length;

  const handleShowAll = (e) => {
    e.preventDefault();
    setVisibleCount(MyServices.length);
  };

  const servicesToShow = MyServices.slice(0, visibleCount); 

  useGSAP(() => {
    if (!hasLoaded) return;

    // Heading: title + subheadline fade up together, once, on scroll
    gsap.fromTo('.services-header',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    const serviceItems = gsap.utils.toArray('.service-card-item');

    serviceItems.forEach((item, index) => {
      if (animatedIndexesRef.current.has(index)) return; 
      animatedIndexesRef.current.add(index);

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

  }, { dependencies: [visibleCount, hasLoaded], scope: sectionRef });

  return (
    <>
      <section ref={sectionRef} className='w-full flex flex-col items-center justify-center mt-45 px-6'>
        <div className='services-header w-full max-w-[680px] flex flex-row items-center justify-between gap-8'>
          <h2 className='text-xl md:text-2xl text-white font-medium leading-tight'>What I Do Best</h2>
          <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>Let me handle the technical stuff for you</p>
        </div>
        
        
        <div className='w-full max-w-[680px] flex flex-col items-center justify-center mt-10 gap-10'>
          {servicesToShow.map((service, index) => (
            
            <div key={index} className='service-card-item group bg-[#4B4B4B1C] w-full flex flex-row items-start justify-start gap-6 p-6 rounded-3xl border border-[#4B4B4B80] hover:border-[#4b4b4bc2] shadow-sm shadow-[#000000]/20 transition-colors duration-300'>
              <img src={service.icon} alt={service.alt} className='bg-[rgba(75,75,75,0.07)] w-12 h-12 object-cover object-center rounded-full grayscale-0 md:grayscale md:invert-0 group-hover:grayscale-0 transition duration-300 shadow-md shadow-[#000000]/20 p-1' />
              <div className='flex flex-col items-start justify-center text-left gap-2'>
                <h2 className='text-xl text-white font-normal leading-tight'>{service.title}</h2>
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