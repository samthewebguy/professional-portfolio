import React, { useState, useRef } from 'react'
import { AllProjects } from '../allWork'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 1. Import GSAP hooks specifically for this component
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AllWork = () => {
  const [filter, setFilter] = useState('WD');
  
  // 2. Create a ref for the projects wrapper
  const containerRef = useRef();

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

  // 3. This hook runs every time 'filter' changes, triggering clean animations for new columns
  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card-column');
    
    // Clear any leftover animation states or triggers from the previous filter view
    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger && t.trigger.classList.contains('project-card-column')) {
        t.kill();
      }
    });

    // Animate each column separately as it scrolls into view
    cards.forEach((card) => {
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

  }, { dependencies: [filter], scope: containerRef }); 

  const getButtonClass = (buttonFilter) => {
    const baseClasses = 'cursor-pointer transition-colors duration-300 px-4 py-1 rounded-full text-sm font-normal border border-[#1b1b1b]';
    const inactiveClasses = 'text-[#a1a1a1] hover:text-white hover:border-[#4b4b4b]';
    const activeClasses = 'bg-black text-[#a1a1a1]';

    return `${baseClasses} ${filter === buttonFilter ? activeClasses : inactiveClasses}`;
  };

  return (
    <section className='w-full flex flex-col items-center justify-center mt-40 px-6'>
        <div className='w-full max-w-[680px] flex flex-row items-center justify-between gap-4'>
            <h2 className='text-xl md:text-2xl text-[#a1a1a1] font-medium leading-tight'>Selected Work</h2>
            <div className='tabs flex flex-row items-center justify-center gap-2 text-sm text-[#4b4b4b] text-left font-normal leading-tight '>
                <button type='button' onClick={() => handleFilterChange('WD')} className={getButtonClass('WD')}>Projects</button>
                <button type='button' onClick={() => handleFilterChange('FD')} className={getButtonClass('FD')}>Code</button>
            </div>
        </div>

        {/* Projects */}
        
        <div ref={containerRef} className='w-full max-w-[680px] flex flex-col items-center justify-center mt-20 gap-10'>
          {filteredProjects.map ((project, index) => (
            
            <div key={project.id || index} className='project-card-column group w-full p-6 rounded-xl flex flex-col items-start justify-center gap-4 bg-[#4B4B4B1C] border border-[#4B4B4B80]' >
              <img src={project.image} alt={project.alt} className='project-image w-full h-auto object-cover border border-[#4B4B4B38] rounded-xl shadow-2xl shadow-[#000000]/60 hover:shadow-[#000000]/70'/>
              <div>
                <h4 className='text-white text-lg font-normal leading-tight mb-4'>{project.title}</h4>
                <p className='text-[#A1A1A1] text-md font-normal leading-normal'>{project.description}</p>
              </div>
              <div className='w-full flex flex-col md:flex-row items-start justify-between mt-4 gap-6'>
                <div className="flex items-center gap-2">
                  {project.tools.map((tool, index) => (
                  <img key={index} src={tool.icon} alt={tool.name} title={tool.name} className="bg-[rgba(75,75,75,0.07)] rounded-sm shadow-md shadow-[#000000]/20 p-1 h-8 w-8 object-contain grayscale-0 md:grayscale md:invert-0 group-hover:grayscale-0 transition duration-300"/>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 first-child:bg-white">
                  {project.urls.map((url, index) => (
                  <a key={index} href={url.to} target="_blank" rel="noopener noreferrer" className={`opacity-50 hover:opacity-100 transition duration-300 flex items-center gap-1 px-4 py-2 rounded-full text-white text-sm font-md ${index === 0 ? 'bg-[#4B4B4B1C] border border-[#4b4b4b]' : ''}`}>{url.name}
                  {url.icon && (
                    <FontAwesomeIcon icon={url.icon} className="h-3 w-3 ml-1" />
                    )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default AllWork