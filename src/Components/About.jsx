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
                    My tech journey truly started in 2021 when I built my first website using Groove Funnels. Since then, I've specialized in engineering high-performance, revenue-driven websites for global clients, scaling brand architectures across Shopify, Squarespace, Webflow, and custom frameworks. Driven by curiosity and a relentless focus on what's possible, I expanded into frontend development to push the boundaries of what a website can do. Today, I write clean, custom code to build highly functional, conversion-focused web applications.
                    </p>

                    <p className='about-reveal-text text-md text-[#a1a1a1] font-normal leading-normal'>
                    Both paths have allowed me to partner with startups and global brands to handle technical complexity and bring their ideas to life. With me, your website performs flawlessly and works hard for your business.
                    </p>

                    <p className='about-reveal-text text-md text-[#a1a1a1] font-normal leading-normal'>
                    When I'm not working, you'll usually find me brainstorming new ideas, sharing thoughts on X, or catching up on tech trends. And of course, it's Chelsea FC for life! For me, building for the web isn't just about syntax; it's about delivering systems that move businesses forward.
                    </p>
                    <div className='w-full max-w-[680px] flex gap-6 mt-6 text-center'>
                        <a href="#consultation" className='border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-lg font-medium transition duration-300'>Book a Strategy Call</a>
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