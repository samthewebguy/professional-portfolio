import React from 'react'
import SamHeadshot from '../assets/Samuel+Obazee.png'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Testimonial from './Testimonial';

gsap.registerPlugin(ScrollTrigger);

const About = ({ showTestimonial = false }) => {

    const aboutSectionRef = useRef();

    useGSAP(() => {
    // 1. Target and animate words inside the heading
    gsap.fromTo('.about-word-reveal-h3', 
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.04, // Quick, snappy cascade across the heading words
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-reveal-heading-wrapper',
          start: 'top 85%', 
          toggleActions: 'play none none none'
        }
      }
    );

    const textParagraphs = gsap.utils.toArray('.about-reveal-text');
    
    textParagraphs.forEach((paragraph) => {
      gsap.fromTo(paragraph,
        { 
          opacity: 0, 
          y: 25 // Subtle upward travel distance for high premium look
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: paragraph,
            start: 'top 82%', // Triggers independently as each paragraph enters the frame
            toggleActions: 'play none none none'
          }
        }
      );
    });

  }, { scope: aboutSectionRef });

    const content = (

        <>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Attention to Details</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Problem-Solving</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Curiosity</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Adaptability</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Effective Task Prioritization</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Responsive to Feedback</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Clear Communication</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Teamwork</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Ownership Mentality</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>Dedicated Self-Improvement</span>
            <span className='px-4 border-r border-l border-[#4b4b4b]'>User-Centric Approach</span>
        </>
    );

  return (
    <>
        <section ref={aboutSectionRef} className='w-full flex flex-col items-center justify-center mt-40 px-6'>
            <div className='w-full max-w-[680px] flex flex-row items-center justify-between gap-8'>
                <h2 className='text-xl md:text-2xl text-[#a1a1a1] font-medium leading-tight'>About Me</h2>
                <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>Driven by curiosity. Built for conversion.</p>
            </div>
            <div className='w-full max-w-[680px] grid grid-cols-1 md:grid-cols-2 items-center justify-start mt-10 gap-10'>
                <img src={SamHeadshot} alt="Samuel Obazee headhsot photograph" className='w-full h-120 md:h-full object-cover object-center rounded-sm' />
                <div className='flex flex-col items-start justify-center text-left gap-4'>
                    <h3 className='about-reveal-heading-wrapper text-xl md:text-2xl text-white font-medium leading-snug flex flex-wrap gap-x-1.5 gap-y-1'>
                    {"Think of me as someone who loves learning and figuring out how things work".split(" ").map((word, i) => (
                        <span key={i} className='about-word-reveal-h3 inline-block'>
                        {word}
                        </span>
                         ))}
                    </h3>
                    <p className='about-reveal-text text-md text-[#a1a1a1] font-normal leading-normal'>
                    My tech journey started back in 2021 when I built my first funnel using Groove Funnels. I realized that a great website is not completely effective if it doesn't talk to the rest of your business. Today, I don't just write custom code or build pretty pages, I build entire digital ecosystems. I look at the whole picture to make sure your front-facing website seamlessly connects with your backend operations.
                    </p>

                    <p className='about-reveal-text text-md text-[#a1a1a1] font-normal leading-normal'>
                    When you work with me, I handle the technical chaos. Beyond developing high-performance sites across Webflow, Shopify, and custom frameworks, I wire up your entire backend. I set up your CRMs, configure email systems, and map out automated workflows so leads are captured and funneled into your pipeline on autopilot.
                    </p>

                    <p className='about-reveal-text text-md text-[#a1a1a1] font-normal leading-normal'>
                    Outside of work, you'll find me on X, tinkering with side projects, or supporting Chelsea FC for life. For me, it isn't about syntax or layouts; it's about cutting out manual work and moving your business forward.
                    </p>
                    <div className='w-full max-w-[680px] flex gap-6 mt-6 text-center'>
                        <a href="#consultation" className='group/btn border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-md font-medium transition duration-300'>Book a Strategy Call
                        <svg 
                            viewBox="0 0 17 17" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="inline-block h-3 w-3 ml-3 transition-transform duration-200 ease-out group-hover/btn:scale-105 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                        >
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.5 0h11.2a.7.7 0 0 1 .8.8V12a.7.7 0 1 1-1.5 0V2.6L1.3 16.3a.8.8 0 0 1-1.1-1L13.9 1.4H4.5a.8.8 0 0 1 0-1.5" fill="currentColor"></path>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scrolling Soft Skills */}

            <div className='w-full max-w-[680px] mt-20 overflow-hidden relative fade-mask'>
                <div style={{'--duration': '30s','--gap': '1rem' }} className='flex flex-row items-center justify-center text-sm text-[#a1a1a1] font-normal text-nowrap leading-normal animate-marquee' >
                    
                    {/* Block 1: Skills for the first scroll pass */}
                    <>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Attention to Details</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Problem-Solving</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Curiosity</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Adaptability</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Effective Task Prioritization</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Responsive to Feedback</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Clear Communication</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Teamwork</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Ownership Mentality</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Dedicated Self-Improvement</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>User-Centric Approach</span>
                    </>

                    {/* Block 2: Duplicated skills for the seamless loop */}
                    <>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Attention to Details</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Problem-Solving</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Curiosity</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Adaptability</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Effective Task Prioritization</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Responsive to Feedback</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Clear Communication</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Teamwork</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Ownership Mentality</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>Dedicated Self-Improvement</span>
                        <span className='px-4 border-r border-l border-[#4b4b4b]'>User-Centric Approach</span>
                    </>
                </div>
            </div>
        </section>

        {/* Testimonial */}

        {showTestimonial && <Testimonial />}
    </>
  )
}

export default About