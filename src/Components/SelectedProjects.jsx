import React, { useState } from 'react'
import { Projects } from '../projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SelectedProjects = () => {

  const [filter, setFilter] = useState('ALL');

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


  const getButtonClass = (buttonFilter) => {
    const baseClasses = 'cursor-pointer transition-colors duration-300 px-4 py-1 rounded-full text-sm font-medium';
    const inactiveClasses = 'text-[#4b4b4b] hover:text-[#a1a1a1]';
    const activeClasses = 'text-white bg-[#4b4b4b] hover:bg-[#a1a1a1]';

    return `${baseClasses} ${filter === buttonFilter ? activeClasses : inactiveClasses}`;
    };


  return (
    <section className='w-full flex flex-col items-center justify-center mt-30 px-6'>
        <div className='w-full max-w-[680px] flex flex-col md:flex-row items-center justify-between gap-6 sticky top-30 z-40 '>
            <h2 className='text-2xl text-[#a1a1a1] font-medium leading-tight'>selected projects</h2>
            <div className='tabs flex flex-row items-center justify-center gap-2 text-sm text-[#4b4b4b] text-left font-normal leading-tight '>
                <button type='button' onClick={() => handleFilterChange('ALL')}  className={getButtonClass('ALL')}>all</button>
                <button type='button' onClick={() => handleFilterChange('WD')} className={getButtonClass('WD')}>website development</button>
                <button type='button' onClick={() => handleFilterChange('FD')} className={getButtonClass('FD')}>frontend development</button>
            </div>
        </div>

        {/* Projects */}

        <div className='w-full max-w-[680px] flex flex-col items-center justify-center mt-16 gap-16'>
          {filteredProjects.map ((project, index) => (
            <div key={index} className='group w-full p-6 rounded-3xl flex flex-col items-start justify-center gap-4 bg-[#4B4B4B1C] border border-[#4B4B4B80]' >
              <img src={project.image} alt={project.alt} className='project-image w-full h-auto object-cover border border-[#4B4B4B38] rounded-xl shadow-2xl shadow-[#000000]/60 hover:shadow-[#000000]/70'/>
              <div>
                <h4 className='text-white text-lg font-normal leading-tight mb-4'>{project.title}</h4>
                <p className='text-[#A1A1A1] text-md font-normal leading-normal'>{project.description}</p>
              </div>
              <div className="flex flex-wrap items-start justify-start gap-2">
                {project.results.map((result, index) => (
                <div key={index} className="bg-[rgba(75,75,75,0.22)] px-4 py-2 rounded-sm flex flex-col items-center justify-center text-center">
                    <span className="text-[#a1a1a1] text-sm font-normal">{result}</span>
                </div>
                ))}
              </div>
              <div className='w-full flex flex-col md:flex-row items-start justify-between mt-4 gap-6'>
                <div className="flex items-center gap-2">
                  {project.tools.map((tool, index) => (
                  <img key={index} src={tool.icon} alt={tool.name} title={tool.name} className="bg-[rgba(75,75,75,0.07)] rounded-sm shadow-md shadow-[#000000]/20 p-1 h-8 w-8 object-contain grayscale-0 md:grayscale md:invert-0 group-hover:grayscale-0 transition duration-300"/>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 first-child:bg-white">
                  {project.urls.map((url, index) => (
                  <a key={index} href={url.to} target="_blank" rel="noopener noreferrer" className={`opacity-80 hover:opacity-100 transition duration-300 flex items-center gap-1 px-4 py-2 rounded-full text-[#a1a1a1] text-sm font-semibold ${index === 0 ? 'bg-[#4B4B4B1C] border border-[#4b4b4b]' : ''}`}>{url.name}
                  {url.icon && (
                    <FontAwesomeIcon icon={url.icon} className="h-3 w-3 ml-2" />
                    )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className='w-full max-w-[680px] flex flex-col md:flex-row items-center justify-center gap-6 mt-20 text-center'>
          <a href="/work" className='w-full bg-[#4B4B4B] border border-[#4B4B4B] py-3 px-6 rounded-full text-white text-lg font-medium transition-colors duration-300'>view more projects</a>
          <a href="https://github.com/samthewebguy" target='_blank' className='w-full border border-[#4B4B4B] py-3 px-6 rounded-full text-[#A1A1A1] hover:text-white text-lg font-medium transition duration-300'>visit github profile</a>
        </div>
    </section>
  )
}

export default SelectedProjects