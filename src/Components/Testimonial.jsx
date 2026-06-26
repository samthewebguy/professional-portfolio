import React, { useState, useRef } from 'react'
import { Testimonials } from '../testimonials'

// 1. Import the necessary GSAP utilities
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INITIAL_TESTIMONIAL_COUNT = 2;

const Testimonial = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_TESTIMONIAL_COUNT);
  
  // 2. Add the container ref for safe scoping
  const testimonialsContainerRef = useRef();

  const hasMoreTestimonials = visibleCount < Testimonials.length;

  const handleShowAll = (e) => {
    e.preventDefault();
    setVisibleCount(Testimonials.length);
  };

  const testimonialToShow = Testimonials.slice(0, visibleCount); 

  // 3. Setup the animation loop tied to the visibleCount state change
  useGSAP(() => {
    const testimonialCards = gsap.utils.toArray('.testimonial-card-item');

    // Prevent trigger stacking in memory
    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger && t.trigger.classList.contains('testimonial-card-item')) {
        t.kill();
      }
    });

    // Fade and slide each column into view beautifully
    testimonialCards.forEach((card) => {
      gsap.fromTo(card, 
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
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

  }, { dependencies: [visibleCount], scope: testimonialsContainerRef });

  return (
    <section id="testimonial" className='w-full flex flex-col items-center justify-center mt-40 px-6'>
        <div className='w-full max-w-[680px] flex flex-row items-center justify-between gap-6'>
            <h2 className='text-xl md:text-2xl text-[#a1a1a1] font-medium leading-tight'>What Founders Have To Say</h2>
            <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>Fortunate to work with amazing brands</p>
        </div>

        
      {/* Dynamically switch between standard flex/grid for initial view and masonry columns for expanded view */}
      <div 
      ref={testimonialsContainerRef} 
      className={`w-full max-w-[680px] mt-10 gap-6 ${
      visibleCount === INITIAL_TESTIMONIAL_COUNT 
      ? 'grid grid-cols-1 sm:grid-cols-2 items-start' 
      : 'columns-1 sm:columns-2 [column-fill:balance]'
      }`}
      >
      {testimonialToShow.map((testimonial, index) => (
        <div 
          key={index} 
          
          className={`w-full break-inside-avoid ${
            visibleCount === INITIAL_TESTIMONIAL_COUNT ? '' : 'inline-block pb-6'
          }`}
        >
            
            <div className='group bg-[#4B4B4B1C] w-full flex flex-col items-start justify-start gap-6 p-6 rounded-3xl border border-[#4B4B4B80] hover:border-[#4b4b4bc2] shadow-sm shadow-[#000000]/20 transition-colors duration-300'>
                <p className='order-2 text-md text-[#a1a1a1] text-left font-normal leading-normal'>"{testimonial.statement}"</p>
                <div className='flex flex-row items-start justify-center text-left gap-4 order-1'>
                    <img src={testimonial.image} alt={testimonial.alt} className='w-12 h-12 object-cover object-center rounded-full shadow-md shadow-[#000000]/20' />
                    <div className='flex flex-col items-start justify-center text-left gap-1'>
                        <p className='flex items-center text-md text-white font-medium leading-tight'>{testimonial.client}
                          <span className='inline-block w-3 h-3 ml-1'>
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.73341 1L4.46675 3.13333L2.06675 3.66667L2.30008 6.13333L0.666748 8L2.30008 9.86667L2.06675 12.3333L4.46675 12.8667L5.73341 15L8.00008 14.0333L10.2667 15L11.5334 12.8667L13.9334 12.3333L13.7001 9.86667L15.3334 8L13.7001 6.13333L13.9334 3.66667L11.5334 3.13333L10.2667 1L8.00008 1.96667L5.73341 1Z" fill="#F5F5F7"/>
                              <path d="M7.30008 10.3667L11.0667 6.6L10.1334 5.63333L7.30008 8.46667L5.86675 7.06667L4.93341 8L7.30008 10.3667Z" fill="#000000"/>
                          </svg>
                          </span>
                          </p>
                        <span className='text-sm text-[#a1a1a1] text-left font-normal leading-normal'>{testimonial.title}</span>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>

        {/* Show More CTA */}
        <div className='w-full max-w-[680px] flex items-end justify-end gap-6 mt-6 text-center'>
            {hasMoreTestimonials && (
                <button type='button' onClick={handleShowAll} className='cursor-pointer border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-md font-medium transition duration-300'>Show All Testimonials ({Testimonials.length - visibleCount} More)
                </button>
            )}
        </div>
    </section>
  )
}

export default Testimonial