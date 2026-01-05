import React from 'react'
import { Stacks } from '../stacks'

const Stack = () => {

const content = (
    <>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>Frontend Development</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>CMS & Website Builders</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>Responsive Design & Prototyping</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>User Experience</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>Marketing & CRM</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>Web Performance Optimization</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>Testing & Debugging</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>Deployment</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>Version Control</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>Productivity & Project Management</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>Online Course Platforms</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>Accessibility</span>
        <span className='px-4 border-r border-l border-[#4b4b4b]'>AI & LLM Tools</span>

    </>
);

  return (
    <section className='w-full flex flex-col items-center justify-center mt-40 px-6'>
        <div className='w-full max-w-[680px] flex flex-row items-center justify-between text-left gap-6'>
            <h2 className='text-2xl text-[#a1a1a1] font-medium leading-tight'>My Tech Stack</h2>
            <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>Tools I use to bring ideas to life</p>
        </div>
        <div className='bg-[#4B4B4B] w-full max-w-[680px] grid grid-cols-3 md:grid-cols-5 items-stretch justify-start mt-10 gap-px'>
            {Stacks.map((stack, index) => (
                <div key={index} className='bg-[#121212] hover:bg-[#121212de] flex flex-col items-center justify-center gap-4 px-4 py-4 transition-colors duration-300'>
                    <img src={stack.image} alt={stack.alt} className='w-8 h-8 object-contain object-center' />
                    <span className='text-sm text-[#a1a1a1] font-normal text-center leading-tight'>{stack.name}</span>
                </div>
            ))}
        </div>

        {/* Scrolling Technical Skills */}

        <div className='w-full max-w-[680px] mt-20 overflow-hidden relative fade-mask'>
            <div style={{'--duration': '30s','--gap': '1rem' }} className='flex flex-row items-center justify-center text-sm text-[#a1a1a1] font-normal text-nowrap leading-normal animate-marquee' >

                <>
                    {/* Block 1: Skills for the first scroll pass */}
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Frontend Development</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>CMS & Website Builders</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Responsive Design & Prototyping</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>User Experience</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Marketing & CRM</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Web Performance Optimization</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Testing & Debugging</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Deployment</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Version Control</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Productivity & Project Management</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Online Course Platforms</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Accessibility</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>AI & LLM Tools</span>
                </>

                {/* Block 2: Duplicated skills for the seamless loop */}
                
                <>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Frontend Development</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>CMS & Website Builders</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Responsive Design & Prototyping</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>User Experience</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Marketing & CRM</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Web Performance Optimization</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Testing & Debugging</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Deployment</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Version Control</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Productivity & Project Management</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Online Course Platforms</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>Accessibility</span>
                    <span className='px-4 border-r border-l border-[#4b4b4b]'>AI & LLM Tools</span>
                </>
            </div>
        </div>
    </section>
  )
}

export default Stack