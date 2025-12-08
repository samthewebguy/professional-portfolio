import React from 'react'
import { Testimonials} from '../testimonials'

const Testimonial = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center mt-40 px-6'>
        <div className='w-full max-w-[680px] flex flex-row items-center justify-between text-left gap-6'>
            <h2 className='text-xl md:text-2xl text-[#a1a1a1] font-medium leading-tight'>what founders say</h2>
            <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>fortunate to work with amazing people</p>
        </div>
        <div className='w-full max-w-[680px] mt-12'>
            <div className='gap-4 sm:columns-2' style={{ columnGap: '1rem' }}>
                {Testimonials.map((testimonial, index) => (
                    <div key={index} className='group bg-[#4B4B4B1C] w-full flex flex-col items-start justify-start gap-6 p-6 rounded-3xl border border-[#4B4B4B80] hover:border-[#4b4b4bc2] shadow-sm shadow-[#000000]/20 transition-colors duration-300' style={{ breakInside: 'avoid-column', marginBottom: '1rem' }}>
                        <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal'>{testimonial.statement}</p>
                        <div className='flex flex-row items-start justify-center text-left gap-4'>
                            <img src={testimonial.image} alt={testimonial.alt} className='w-12 h-12 object-cover object-center rounded-full shadow-md shadow-[#000000]/20' />
                            <div className='flex flex-col items-start justify-center text-left gap-1'>
                                <h4 className='text-md text-white font-medium leading-tight'>{testimonial.client}</h4>
                                <span className='text-sm text-[#a1a1a1] text-left font-normal leading-normal'>{testimonial.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonial