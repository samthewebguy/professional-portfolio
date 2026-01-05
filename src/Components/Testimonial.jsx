import React, {useState} from 'react'
import { Testimonials} from '../testimonials'

const INITIAL_TESTIMONIAL_COUNT = 2;

const Testimonial = () => {

      const [visibleCount, setVisibleCount] = useState(INITIAL_TESTIMONIAL_COUNT);
    
      const hasMoreTestimonials = visibleCount <Testimonials.length;
    
      const handleShowAll = (e) => {
    
        e.preventDefault();
    
        setVisibleCount(Testimonials.length);
    
      };
    
      const testimonialToShow = Testimonials.slice(0, visibleCount); 

  return (
    <section className='w-full flex flex-col items-center justify-center mt-40 px-6'>
        <div className='w-full max-w-[680px] flex flex-row items-center justify-between gap-10'>
            <h2 className='text-2xl text-[#a1a1a1] font-medium leading-tight'>What Founders Say</h2>
            <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>Fortunate to work with amazing people</p>
        </div>
        <div className='w-full max-w-[680px] flex flex-col items-center justify-center mt-10 gap-10'>
                {testimonialToShow.map((testimonial, index) => (
                    <div key={index} className='group bg-[#4B4B4B1C] w-full flex flex-col items-start justify-start gap-6 p-6 rounded-3xl border border-[#4B4B4B80] hover:border-[#4b4b4bc2] shadow-sm shadow-[#000000]/20 transition-colors duration-300'>
                        <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal'>"{testimonial.statement}"</p>
                        <div className='flex flex-row items-start justify-center text-left gap-4'>
                            <img src={testimonial.image} alt={testimonial.alt} className='w-12 h-12 object-cover object-center rounded-full shadow-md shadow-[#000000]/20' />
                            <div className='flex flex-col items-start justify-center text-left gap-1'>
                                <p className='text-md text-white font-medium leading-tight'>{testimonial.client}</p>
                                <span className='text-sm text-[#a1a1a1] text-left font-normal leading-normal'>{testimonial.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        {/* Show More CTA */}
                
        <div className='w-full max-w-[680px] flex items-end justify-end gap-6 mt-6 text-center'>
            {hasMoreTestimonials && (
                <button type='button' onClick={handleShowAll} target='_blank' className='cursor-pointer border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-lg font-medium transition duration-300'>Show All Testimonials ({Testimonials.length - visibleCount} More)
                </button>
            )}
        </div>
    </section>
  )
}

export default Testimonial