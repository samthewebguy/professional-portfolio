import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { FooterLinks } from '../footerlinks';

const Footer = () => {

    useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"discovery-call"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full flex flex-col items-center justify-center mt-40 px-6 mb-20'>
        <section className='w-full max-w-[680px] flex flex-col items-center justify-center gap-6'>
            <div className='w-full flex flex-row items-center justify-between gap-4'>
                <h2 className='text-xl md:text-2xl text-white font-medium leading-tight'>Let's Work Together</h2>
                <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>Available to take on new projects!</p>
            </div>
            <div className='w-full flex flex-col items-start justify-between mt-10 gap-4'>
                <p className='text-lg text-white text-left font-medium leading-tight'>Ready to level up your website?</p>
                <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal'>Trusted by 50+ businesses globally to architect high-performance, conversion-focused websites.</p>
            </div>

            {/* Cal Embed */}
            <div className='w-full h-[600px] mt-6 rounded-3xl border border-[#4B4B4B80] hover:border-[#4b4b4bc2] shadow-sm shadow-[#000000]/20 transition-colors duration-300 overflow-hidden' id='consultation'>
                <Cal namespace="discovery-call"
                calLink="samthewebguy/discovery-call"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{"layout":"month_view"}}/>
            </div>
        </section>

        {/* Footer Links */}
        <section className='w-full max-w-[680px] flex flex-col items-center justify-center mt-20'>
            <div className='w-full flex flex-col items-center justify-center'>
                {FooterLinks.map((link, index) => (
                    <div key={index} className='w-full flex flex-row items-center justify-between text-center gap-2 border-t border-[#4B4B4B80] py-4 hover:bg-[#4B4B4B21] transition-colors duration-300'>
                    <p className='text-md text-white text-left font-medium leading-tight'>{link.title}</p>
                    <a href={link.to} target='_blank' rel='noopener noreferrer' className='group flex flex-row items-center text-md text-[#a1a1a1] hover:text-white font-normal leading-normal transition-colors duration-300 gap-1'>
                        <span>{link.link}</span>
                        {/* Premium Dynamic Custom SVG Arrow */}
                        <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 ml-2 transform transition-transform duration-200 ease-out group-hover:rotate-45 group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:translate-x-1">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0h11.2a.7.7 0 0 1 .8.8V12a.7.7 0 1 1-1.5 0V2.6L1.3 16.3a.8.8 0 0 1-1.1-1L13.9 1.4H4.5a.8.8 0 0 1 0-1.5" fill="currentColor"></path>
                        </svg>
                    </a>
                    </div>
                ))}
                <div className='w-full flex flex-row items-center justify-between gap-2 border-t border-b border-[#4B4B4B80] py-4 mt-10 hover:bg-[#4b4b4b21] transition-colors duration-300'>
                    <p className='text-md text-white text-left font-medium leading-tight'>Portfolio UI Design</p>
                    <a href="https://amirah.vzy.io" target='_blank' rel='noopener noreferrer' className='group flex flex-row items-center text-md text-[#a1a1a1] hover:text-white font-normal leading-normal transition-colors duration-300 gap-1'>
                        <span>Amirah (Product Designer)</span>
                        {/* Premium Dynamic Custom SVG Arrow */}
                        <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 ml-2 transform transition-transform duration-200 ease-out group-hover:rotate-45 group-hover:scale-105  group-hover:translate-x-1">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0h11.2a.7.7 0 0 1 .8.8V12a.7.7 0 1 1-1.5 0V2.6L1.3 16.3a.8.8 0 0 1-1.1-1L13.9 1.4H4.5a.8.8 0 0 1 0-1.5" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        
        <div className='w-full max-w-[690px] flex items-center justify-center text-center mt-10'>
            <p className='text-sm text-[#a1a1a1] font-normal leading-normal'>&copy; Samthewebguy {currentYear}. All rights reserved | Website Development by Samuel Obazee </p>
        </div>
    </footer>
  )
}

export default Footer