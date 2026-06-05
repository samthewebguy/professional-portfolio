import React from 'react'
import { useRef } from 'react';
import SamuelHeadShot from './assets/Samuel+Obazee+Headshot.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import SelectedProjects from './Components/SelectedProjects';
import About from './Components/About';
import Services from './Components/Services';
import Stack from './Components/Stack';
import Testimonial from './Components/Testimonial';


import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Home = () => {

    const heroRef = useRef();

  useGSAP(() => {
    const titleEl = document.querySelector('.scramble-title');
    if (!titleEl) return;

    // The destination text layout exactly as you have it
    const originalHTML = `Samuel Obazee`;
    
    // Characters used to generate the temporary hash strings
    const chars = "X_#_V_7_M_9_2_K_Z_$_%_&_*_@_?";
    const totalIterations = 12; // How many times it shifts before finishing
    
    let tl = gsap.timeline();


    tl.from('.hero-fade-in', {
      opacity: 0,
      y: 15,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // The custom scramble text sequence loop
    for (let i = 0; i < totalIterations; i++) {
      tl.to(titleEl, {
        duration: 0.08,
        onStart: () => {
          // Generate a randomized messy version of the heading
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

    // Snap cleanly to your original formatted HTML markup
    tl.to(titleEl, {
      duration: 0.02,
      onStart: () => {
        titleEl.innerHTML = originalHTML;
      }
    });

    // Give a slight punch to the final reveal text color popping in
    tl.fromTo(titleEl, 
      { filter: 'brightness(1.5)' },
      { filter: 'brightness(1)', duration: 0.4, ease: 'power1.out' }
    );

    tl.from('.text-fade-in-word', {
      opacity: 0,
      x: -15,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power2.out'
    }, "-=0.2");

  }, { scope: heroRef });

  return (
    <>

        {/* Hero Section */}

        <section ref={heroRef} className='w-full flex flex-col items-center justify-center mt-44 px-6'>
            <div className='w-full max-w-[680px] flex flex-col items-start justify-center'>
                <div className='hero-fade-in flex flex-row items-center justify-center gap-4'>
                    <img src={SamuelHeadShot} alt="Samuel Obazee headshot photograph" className='w-15 h-20 object-cover rounded-sm' />
                    <div className='flex flex-col items-start justify-center text-left'>
                        <h4 className='scramble-title text-lg text-white font-medium leading-normal'>Samuel Obazee</h4>
                        <p className='text-md text-[#a1a1a1] font-normal leading-normal'>Web Developer & Systems Builder</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mt-4 gap-4'>
                    <h1 className='text-2xl md:text-3xl text-white font-medium leading-tight flex flex-wrap gap-x-2 gap-y-1'>
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
                    </h1>
                </div>
                <div className='hero-fade-in w-full flex flex-row items-center justify-center gap-4 mt-8'>
                    <p className='mr-5 text-nowrap text-sm font-normal text-[#a1a1a1]'>I'M ALSO</p>
                    <div className='bg-[rgba(75,75,75,0.33)] w-full h-px'></div>
                </div>
                <div className='hero-fade-in flex flex-col items-start justify-center mt-4 text-sm font-normal leading-normal'>
                    <div className='flex flex-row items-start justify-center gap-2 mb-2'>
                        <FontAwesomeIcon icon={faCode} />
                        <p>A Frontend Developer — <span className='text-[#a1a1a1] italic'>focused on building efficient and user-centric web applications.</span></p>
                    </div>
                    <div className='flex flex-row items-start justify-center gap-2 mb-2'>
                        <FontAwesomeIcon icon={faBuilding} />
                        <p>A Systems-focused Builder — <span className='text-[#a1a1a1] italic'>connecting websites, payments, integrations, automations and workflows when projects require more than just a website.</span></p>
                    </div>
                </div>

                {/* Hero CTA */}

                <div className='hero-fade-in flex flex-col items-start justify-center mt-10 gap-2'>
                    <div className='flex flex-row items-center justify-center gap-3 text-[#a1a1a1] text-sm font-normal leading-normal mb-2'>
                        <div className='border-6 border-[rgba(0,185,22,0.22)] rounded-full animate-pulse'>
                            <div className='bg-[rgba(0,185,22,0.77)] w-3 h-3 rounded-full'></div>
                        </div>
                        <p>Available to work on new projects! Let's talk.</p>
                    </div>
                    <a href="#consultation" className='border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-lg font-medium transition-colors duration-300'>Book a Free Discovery Call</a>
                </div>
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