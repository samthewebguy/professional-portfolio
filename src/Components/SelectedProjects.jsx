import React, { useState, useRef } from 'react'
import { Projects } from '../projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// 1. Import GSAP hooks and registration
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SelectedProjects = () => {

  const [filter, setFilter] = useState('WD');
  
  // 2. Create the wrapper ref for component scoping
  const cardsContainerRef = useRef();

  const handleFilterChange = (newFilter) => {
      setFilter(newFilter);
    };

  const filteredProjects = Projects.filter(project => {
    if (filter === 'ALL') {
      return true;
    }
      return project.id.startsWith(filter);
  })
   .sort((a, b) => {
    return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
  });

  // 3. Initialize the scroll-triggered animation loop watching the filter state
  useGSAP(() => {
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
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

  }, { dependencies: [filter], scope: cardsContainerRef });

  const getButtonClass = (buttonFilter) => {
    const baseClasses = 'cursor-pointer transition-colors duration-300 px-2 py-1 rounded-full text-sm font-normal border border-[#1b1b1b]';
    const inactiveClasses = 'text-[#a1a1a1] hover:text-white hover:border-[#4b4b4b]';
    const activeClasses = 'bg-black text-[#a1a1a1]';

    return `${baseClasses} ${filter === buttonFilter ? activeClasses : inactiveClasses}`;
    };

    const handleScrollToTestimonials = (e) => {
    e.preventDefault();
  
  const target = document.getElementById('testimonial');

  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <section className='w-full flex flex-col items-center justify-center mt-30 px-6'>
        <div className='hero-fade-in w-full max-w-[680px] flex flex-row items-center justify-between gap-4'>
            <h2 className='text-xl md:text-2xl text-white font-medium leading-tight'>Selected Work</h2>
            <div className='tabs flex flex-row items-center justify-center gap-2 text-sm text-[#4b4b4b] text-left font-normal leading-tight '>
                <button type='button' onClick={() => handleFilterChange('WD')} className={getButtonClass('WD')}>Projects</button>
                <button type='button' onClick={() => handleFilterChange('FD')} className={getButtonClass('FD')}>Code</button>
            </div>
        </div>

        {/* Projects Grid Container */}
        
        <div ref={cardsContainerRef} className='w-full max-w-[680px] flex flex-col items-center justify-center mt-16 gap-10'>
          {filteredProjects.map ((project, index) => (
            <div 
              key={project.id || index} 
              className="w-full sticky top-[16%] md:top-[15%] origin-top transition-transform duration-200"
              style={{ 
              zIndex: index + 1,
              transform: `scale(${1 - (filteredProjects.length - 1 - index) * 0.01})`
              }}
            >
            <div className='group w-full rounded-lg flex flex-col items-start justify-center gap-4 bg-[#161616] border border-[#4B4B4B80] shadow-2xl shadow-black/80'>
              <img src={project.image} alt={project.alt} className='project-image w-full aspect-4/3 sm:aspect-video md:h-[400px] object-cover border border-[#4B4B4B38] rounded-lg shadow-2xl shadow-[#000000]/60 hover:shadow-[#000000]/70'/>
              <div className='p-6 pb-0'>
                <h4 className='text-white text-lg font-normal leading-tight mb-4'>{project.title}</h4>
                <p className='text-[#A1A1A1] text-md font-normal leading-normal'>{project.description}</p>
              </div>
              <div className='w-full flex flex-row items-center justify-between pl-6 pr-6 pb-6 mt-4 gap-6'>
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

        {/* CTA Buttons */}
        <div className='w-full max-w-[680px] flex flex-col md:flex-row items-center justify-center gap-6 mt-20 text-center'>
          <Link to="/work" className='group/btn w-full bg-transparent border border-[#4B4B4B] py-3 px-6 rounded-full text-[#a1a1a1]  hover:text-white text-md font-medium transition-colors duration-300'>View More Projects
          <svg 
                      viewBox="0 0 17 17" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="inline-block h-3 w-3 ml-3 transform transition-transform duration-200 ease-out group-hover/btn:rotate-45 group-hover/btn:scale-105 group-hover/btn:translate-x-1"
                    >
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 0h11.2a.7.7 0 0 1 .8.8V12a.7.7 0 1 1-1.5 0V2.6L1.3 16.3a.8.8 0 0 1-1.1-1L13.9 1.4H4.5a.8.8 0 0 1 0-1.5" fill="currentColor"></path>
                    </svg>
          </Link>
          <button 
      type="button"
      onClick={handleScrollToTestimonials}
      className='group/btn w-full cursor-pointer border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-md font-medium transition duration-300'
    >
      What Our Clients Say

      <svg 
                      viewBox="0 0 17 17" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="inline-block h-3 w-3 ml-3 transform transition-transform duration-200 ease-out group-hover/btn:rotate-45 group-hover/btn:scale-105 group-hover/btn:translate-x-1"
                    >
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.5 0h11.2a.7.7 0 0 1 .8.8V12a.7.7 0 1 1-1.5 0V2.6L1.3 16.3a.8.8 0 0 1-1.1-1L13.9 1.4H4.5a.8.8 0 0 1 0-1.5" fill="currentColor"></path>
                    </svg>
    </button>
        </div>
    </section>
  )
}

export default SelectedProjects