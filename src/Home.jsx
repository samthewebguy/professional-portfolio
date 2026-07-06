import React from 'react'
import { useRef } from 'react';
import SamuelHeadShot from './assets/Samuel+Obazee+Headshot.JPG'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import SelectedProjects from './Components/SelectedProjects';
import Services from './Components/Services';
import Stack from './Components/Stack';
import Testimonial from './Components/Testimonial';
import LogoIcon from './assets/logo-icon.svg';


import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Home = ({ hasLoaded }) => {

    const pageRef = useRef();

  useGSAP(() => {
    if (!hasLoaded) return;

    const titleEl = document.querySelector('.scramble-title');
    if (!titleEl) return;

    const originalHTML = `Samuel Obazee`;
    const chars = "X_#_V_7_M_9_2_K_Z_$_%_&_*_@_?";
    const totalIterations = 12;

    let tl = gsap.timeline();

    tl.to('.hero-photo-name', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    for (let i = 0; i < totalIterations; i++) {
      tl.to(titleEl, {
        duration: 0.08,
        onStart: () => {
          let scrambled = "Samuel Obazee"
            .split("")
            .map((char) => {
              if (char === " ") return " ";
              return Math.random() > 0.4 ? chars[Math.floor(Math.random() * chars.length)] : char;
            })
            .join("");
          titleEl.innerText = scrambled;
        }
      });
    }

    tl.to(titleEl, {
      duration: 0.02,
      onStart: () => {
        titleEl.innerHTML = originalHTML;
      }
    });

    tl.fromTo(titleEl,
      { filter: 'brightness(1.5)' },
      { filter: 'brightness(1)', duration: 0.4, ease: 'power1.out' }
    );

    tl.to('.text-fade-in-word', {
      opacity: 1,
      x: 0,
      duration: 0.7,
      stagger: 0.07,
      ease: 'power2.out'
    }, "-=0.1");

    tl.to('.hero-divider-label', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, "-=0.2")
    .to('.hero-divider-line', {
      scaleX: 1,
      duration: 0.6,
      ease: 'power3.inOut'
    }, "-=0.3");

    tl.to('.hero-body-row', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out'
    }, "-=0.2");

    tl.to('.hero-cta', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out'
    }, "-=0.2");

  }, { scope: pageRef, dependencies: [hasLoaded] });

  return (
    <div ref={pageRef}>

    {/* Hero Section */}

  <section className='w-full flex flex-col items-center justify-center mt-45 px-6'>
    <div className='w-full max-w-[680px] flex flex-col items-start justify-center'>
        <div className='hero-photo-name flex flex-row items-center justify-center gap-4'>
            <img src={SamuelHeadShot} alt="Samuel Obazee headshot photograph" className='w-18 h-18 object-cover rounded-full' />
            <div className='flex flex-col items-start justify-center text-left'>
                <h4 className='scramble-title text-lg text-white font-medium leading-normal'>Samuel Obazee</h4>
                <p className='text-sm text-[#a1a1a1] font-normal leading-normal'>Web Developer & Systems Builder</p>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-10 gap-4'>
            <h1 className='text-2xl md:text-3xl text-white font-medium leading-tight flex flex-wrap items-baseline gap-x-2 gap-y-1'>
                {"Translating Brand Positioning into".split(" ").map((word, index) => (
                    <span key={`gray-${index}`} className="text-fade-in-word inline-block">
                        {word}
                    </span>
                ))}
                {"High-Converting Websites".split(" ").map((word, index) => (
                    <span key={`white-${index}`} className="text-fade-in-word text-white inline-block">
                        {word}
                    </span>
                ))}
                <span className="text-fade-in-word inline-block align-baseline ml-1">
                  <img 
                  src={LogoIcon} 
                  alt="logo icon" 
                  className="h-8 w-8 md:h-12 md:w-12 animate-[spin_4s_linear_infinite] object-contain inline-block"
                  />
                </span>
            </h1>
        </div>
        <div className='hero-divider w-full flex flex-row items-center justify-center gap-4 mt-8'>
            <p className='hero-divider-label mr-5 text-nowrap text-sm font-normal text-[#a1a1a1]'>I'M ALSO</p>
            <div className='hero-divider-line bg-[rgba(75,75,75,0.33)] w-full h-px'></div>
        </div>
        <div className='flex flex-col items-start justify-center mt-4 text-sm font-normal leading-normal'>
            <div className='hero-body-row flex flex-row items-start justify-center gap-2 mb-2'>
                <FontAwesomeIcon icon={faCode} />
                <p>A Frontend Developer — <span className='text-[#a1a1a1] italic'>focused on building efficient and user-centric web applications.</span></p>
            </div>
            <div className='hero-body-row flex flex-row items-start justify-center gap-2 mb-2'>
                <FontAwesomeIcon icon={faBuilding} />
                <p>A Systems-focused Builder — <span className='text-[#a1a1a1] italic'>connecting websites, payments, integrations, automations and workflows when projects require more than just a website.</span></p>
            </div>
        </div>

        {/* Hero CTA */}

        <div className='hero-cta flex flex-col items-start justify-center mt-10 gap-2'>
            <div className='flex flex-row items-center justify-center gap-3 text-[#a1a1a1] text-sm font-normal leading-normal mb-2'>
                <div className='border-6 border-[rgba(0,185,22,0.22)] rounded-full animate-pulse'>
                    <div className='bg-[rgb(0,185,22)] w-3 h-3 rounded-full'></div>
                </div>
                <p>Available to work on new projects! Let's talk.</p>
            </div>
            <a href="#consultation" className='group/btn border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-md font-medium transition-colors duration-300'>Book a Strategy Call 
              <svg 
              viewBox="0 0 17 17" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="inline-block h-3 w-3 ml-3 transform transition-transform duration-200 ease-out group-hover/btn:rotate-45 group-hover/btn:scale-105 group-hover/btn:translate-x-1"
            >
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 0h11.2a.7.7 0 0 1 .8.8V12a.7.7 0 1 1-1.5 0V2.6L1.3 16.3a.8.8 0 0 1-1.1-1L13.9 1.4H4.5a.8.8 0 0 1 0-1.5" fill="currentColor"></path>
            </svg>
            </a>
        </div>
    </div>
  </section>

    {/* Selected Projects */}

        <SelectedProjects  hasLoaded={hasLoaded} />

        {/* Services */}

        <Services hasLoaded={hasLoaded} />

        {/* Services */}

        <Stack />

        {/* Testimonial */}

        <Testimonial />
    </div>
  )
}

export default Home