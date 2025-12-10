import React from 'react'
import SamuelHeadShot from './assets/Samuel+Obazee+Headshot.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-regular-svg-icons";
import SelectedProjects from './Components/SelectedProjects';
import About from './Components/About';
import Services from './Components/Services';
import Stack from './Components/Stack';
import Testimonial from './Components/Testimonial';

const Home = () => {

  return (
    <>

        {/* Hero Section */}

        <section className='w-full flex flex-col items-center justify-center mt-44 px-6'>
            <div className='w-full max-w-[680px] flex flex-col items-start justify-center'>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <img src={SamuelHeadShot} alt="Samuel Obazee headshot photograph" className='w-15 h-20 object-cover rounded-sm' />
                    <div className='flex flex-col items-start justify-center text-left'>
                        <h4 className='text-lg text-white font-medium leading-normal'>Samuel Obazee</h4>
                        <p className='text-md text-[#a1a1a1] font-normal leading-normal'>website & frontend developer</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mt-4 gap-4'>
                    <h1 className='text-2xl md:text-3xl text-[#a1a1a1] font-medium leading-tight'>i build high-converting, revenue-driving websites for <span className='text-white'> startups and global brands.</span></h1>
                    <p className='text-md text-[#a1a1a1] font-normal leading-normal'>versatile website developer with <span className='text-white'>4+ years of experience</span> building functional, scalable websites using <span className='text-white'>low-code, no-code, and CMS tools.</span></p>
                </div>
                <div className='w-full flex flex-row items-center justify-center gap-4 mt-8'>
                    <p className='mr-5 text-nowrap text-sm font-normal text-[#a1a1a1]'>I'M ALSO</p>
                    <div className='bg-[rgba(75,75,75,0.33)] w-full h-px'></div>
                </div>
                <div className='flex flex-col items-start justify-center mt-4 text-sm font-normal leading-normal'>
                    <div className='flex flex-row items-center justify-center gap-2 mb-2'>
                        <FontAwesomeIcon icon={faCode} />
                        <p>a frontend developer — <span className='text-[#a1a1a1] italic'>focused on building efficient and user-centric web applications</span></p>
                    </div>
                    <div className='flex flex-row items-center justify-center gap-2 mb-2'>
                        <FontAwesomeIcon icon={faHouse} />
                        <p>freelancing — <span className='text-[#a1a1a1] italic'>but open to new collaborations</span></p>
                    </div>
                </div>

                {/* Hero CTA */}

                <div className='flex flex-col items-start justify-center mt-10 gap-2'>
                    <div className='flex flex-row items-center justify-center gap-3 text-[#a1a1a1] text-sm font-normal leading-normal mb-2'>
                        <div className='border-6 border-[rgba(0,185,22,0.22)] rounded-full animate-pulse'>
                            <div className='bg-[rgba(0,185,22,0.77)] w-3 h-3 rounded-full'></div>
                        </div>
                        <p>available to work on new projects! Let's talk.</p>
                    </div>
                    <a href="#consultation" className='border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-lg font-medium transition-colors duration-300'>book a free discovery call</a>
                </div>
            </div>
        </section>

        {/* Video Animation */}

        <section className='w-full flex items-center justify-center mt-12 mb-12 px-6'>
            <div className='w-full max-w-[680px] flex items-center justify-center shadow-2xl shadow-[#4b4b4b]/25  bg-[rgba(75,75,75,0.11)] border border-[#4b4b4b38] relative pt-[75%] overflow-hidden rounded-2xl md:max-w-[608px] xl:pt-[33%]'>
            <iframe 
                className='rounded-2xl object-cover overflow-hidden absolute top-0 left-0 w-full h-full'
                src="https://player.vimeo.com/video/1143432490?badge=0&controls=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" 
                title="SAMTHEWEBGUY WORK"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ border: 'none' }}
            >
            </iframe>
            </div>  
        </section>

        {/* Selected Projects */}

        <SelectedProjects />

        {/* About */}

        <About />

        {/* Services */}

        <Services />

        {/* Services */}

        <Stack />

        {/* Testimonial */}

        <Testimonial />
    </>
  )
}

export default Home