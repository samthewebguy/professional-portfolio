import React, { useState, useRef } from 'react'
import { AllProjects } from '../allWork'
import Testimonial from './Testimonial';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AllWork = () => {
  const [filter, setFilter] = useState('WD');
  
  const sectionRef = useRef();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects = AllProjects.filter(project => {
    if (filter === 'ALL') {
      return true;
    }
    return project.id.startsWith(filter);
  }).sort((a, b) => {
    return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
  });

  useGSAP(() => {

    gsap.fromTo('.selected-projects-header',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.selected-projects-header',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    const selectedCards = gsap.utils.toArray('.selected-card-column');

    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger && t.trigger.classList.contains('selected-card-column')) {
        t.kill();
      }
    });

    selectedCards.forEach((card) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50,
          scale: 0.96
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

  }, { dependencies: [filter], scope: sectionRef });

  const getButtonClass = (buttonFilter) => {
  const isSelected = filter === buttonFilter;
  
  const baseClasses = 'relative pb-3 text-md font-medium tracking-tight cursor-pointer transition-colors duration-300 outline-none';
  
  const activeText = 'text-white';
  const inactiveText = 'text-[#a1a1a1] hover:text-white';
  
  const underlineIndicator = isSelected 
    ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white after:rounded-full' 
    : 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-transparent';

  return `${baseClasses} ${isSelected ? activeText : inactiveText} ${underlineIndicator}`;
};

  return (
    <>
    <section ref={sectionRef} className='w-full flex flex-col items-center justify-center mt-45 px-6'>
        <div className='selected-projects-header w-full max-w-[680px] flex flex-row items-center justify-between gap-6'>
          <h2 className='text-xl md:text-2xl text-white font-medium tracking-tight'>
          All Works
          </h2>
  
          <div className='tabs flex flex-row items-center justify-start gap-8 text-sm font-normal text-left border-b border-[#4b4b4b]/20  pb-px'>
          <button 
            type='button' 
            onClick={() => handleFilterChange('WD')} 
            className={getButtonClass('WD')}
          >
            Projects
          </button>
          <button 
            type='button' 
            onClick={() => handleFilterChange('FD')} 
            className={getButtonClass('FD')}
        >
          Code
        </button>
        </div>
        </div>

        {/* Projects */}
        
        <div className='w-full max-w-[680px] flex flex-col items-center justify-center mt-20 gap-10'>
          {filteredProjects.map ((project, index) => (

            <div 
              key={project.id || index} 
              className="selected-card-column w-full sticky top-[16%] md:top-[15%] origin-top transition-transform duration-200"
              style={{ 
              zIndex: index + 1,
              transform: `scale(${1 - (filteredProjects.length - 1 - index) * 0.01})`
              }}
            >
            
            <div className='group w-full rounded-lg flex flex-col items-start justify-center gap-4 bg-[#161616] border border-[#4B4B4B80] shadow-2xl shadow-black/80'>
              {/* Image Container with Absolute Position Context */}
              <div className="relative w-full overflow-hidden rounded-lg">
                <img 
                   src={project.image} 
                  alt={project.alt} 
                  className='project-image w-full aspect-4/3 sm:aspect-video md:h-[400px] object-cover border border-[#4B4B4B38] rounded-lg shadow-2xl shadow-[#000000]/60 hover:shadow-[#000000]/70'
                />
                {project.tag && (
                  <div className="absolute top-4 left-4 px-4 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg pointer-events-none select-none">
                    <span className="text-[10px] md:text-xs font-mono tracking-widest text-neutral-300 uppercase">
                      {project.tag}
                    </span>
                  </div>
                )}
              </div>
              <div className='p-6 pb-0'>
                <h4 className='text-white text-lg font-normal leading-tight mb-4'>{project.title}</h4>
                <p className='text-[#A1A1A1] text-md font-normal leading-normal'>{project.description}</p>
              </div>
              <div className='w-full flex flex-col md:flex-row items-start justify-between pl-6 pr-6 pb-6 mt-4 gap-6'>
                <div className="flex items-center gap-2">
                  {project.tools.map((tool, index) => (
                  <img key={index} src={tool.icon} alt={tool.name} title={tool.name} className="bg-[rgba(75,75,75,0.07)] rounded-sm shadow-md shadow-[#000000]/20 p-1 h-8 w-8 object-contain grayscale-0 md:grayscale md:invert-0 group-hover:grayscale-0 transition duration-300"/>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 first-child:bg-white">
                  {project.urls.map((url, index) => (
                  <a key={index} href={url.to} target="_blank" rel="noopener noreferrer" className={`group/btn opacity-70 hover:opacity-100 transition duration-300 flex items-center gap-1 px-4 py-2 rounded-full text-white text-sm font-md ${index === 0 ? 'bg-[#4B4B4B1C] border border-[#4b4b4b]' : ''}`}>{url.name}
                    <svg 
                      viewBox="0 0 17 17" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-2 w-2 ml-2 transform transition-transform duration-200 ease-out group-hover/btn:rotate-45 group-hover/btn:scale-105  group-hover/btn:translate-x-1"
                    >
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 0h11.2a.7.7 0 0 1 .8.8V12a.7.7 0 1 1-1.5 0V2.6L1.3 16.3a.8.8 0 0 1-1.1-1L13.9 1.4H4.5a.8.8 0 0 1 0-1.5" fill="currentColor"></path>
                    </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
    </section>
    {/* Testimonial */}

    <Testimonial />
    </>
  )
}

export default AllWork