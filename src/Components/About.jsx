import React from 'react'
import SamHeadshot from '../assets/Samuel+Obazee.png'

const About = () => {

    const content = (
        <>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>attention to details</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>problem-solving</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>curiosity</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>adaptability</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Effective task prioritization</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Responsive to feedback</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>clear communication</span>    
            <span className='px-4 border-r border-l border-[#4b4b4b]'>teamwork</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Ownership mentality</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Dedicated self-improvement</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>User-centric approach</span>
        </>
    );

  return (
        <section className='w-full flex flex-col items-center justify-center mt-40 px-6'>
            <div className='w-full max-w-[680px] flex flex-row items-center justify-between gap-6'>
                <h2 className='text-2xl text-[#a1a1a1] font-medium leading-tight'>about me</h2>
                <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>more than just code. I build experiences</p>
            </div>
            <div className='w-full max-w-[680px] grid grid-cols-1 md:grid-cols-2 items-center justify-start mt-10 gap-10'>
                <img src={SamHeadshot} alt="Samuel Obazee headhsot photograph" className='w-full h-120 md:h-full object-cover object-center rounded-sm' />
                <div className='flex flex-col items-start justify-center text-left gap-4'>
                    <h3 className='text-xl text-white font-medium leading-tight'>think of me as someone who loves learning and figuring out how things work</h3>
                    <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal'>My tech journey truly started in 2021 when I built my first website using Groove Funnel. Since then, I've worked with different CMS and website builder platforms, creating functional, revenue-driven websites. I've always chased what makes me curious and what feels possible. That same feeling led me into frontend development, where I realized I could expand my capacity in the web space. Now I write code and build functional, efficient web applications.
                    <br /><br /> 
                    Both paths have allowed me to work with startups and global brands, helping them bring ideas to life with flexibility and practical solutions. With me, your website performs efficiently and works hard for your business.
                    <br /><br /> 
                    When I'm not working, you'll find me brainstorming, scrolling through X (formerly Twitter) to share my thoughts, catching up on the latest news, or usually having a good laugh. And lastly, Chelsea FC for life!</p>
                    <div className='w-full max-w-[680px] flex gap-6 mt-6 text-center'>
                        <a href="#" className='border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-lg font-medium transition duration-300'>download resume</a>
                    </div>
                </div>
            </div>

            {/* Scrolling Soft Skills */}

            <div className='w-full max-w-[680px] mt-20 overflow-hidden relative fade-mask'>
                <div style={{'--duration': '30s','--gap': '1rem' }} className='flex flex-row items-center justify-center text-sm text-[#a1a1a1] font-normal text-nowrap leading-normal animate-marquee' >
                    
                    {/* Block 1: Skills for the first scroll pass */}
                    <>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>attention to details</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>problem-solving</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>curiosity</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>adaptability</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Effective task prioritization</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Responsive to feedback</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>clear communication</span>    
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>teamwork</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Ownership mentality</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Dedicated self-improvement</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>User-centric approach</span>
                    </>

                    {/* Block 2: Duplicated skills for the seamless loop */}
                    <>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>attention to details</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>problem-solving</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>curiosity</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>adaptability</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Effective task prioritization</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Responsive to feedback</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>clear communication</span>    
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>teamwork</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Ownership mentality</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Dedicated self-improvement</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>User-centric approach</span>
                    </>
                </div>
            </div>
        </section>
  )
}

export default About