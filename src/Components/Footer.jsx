import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { FooterLinks } from '../footerlinks';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
            <div className='w-full flex flex-row items-center justify-between gap-6'>
                <h2 className='text-2xl text-[#a1a1a1] font-medium leading-tight'>let's work together</h2>
                <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal italic '>book a call, and I'll take care of the rest</p>
            </div>
            <div className='w-full flex flex-col items-start justify-between mt-10 gap-4'>
                <h4 className='text-lg text-white text-left font-medium leading-tight'>have an idea or project in mind?</h4>
                <p className='text-md text-[#a1a1a1] text-left font-normal leading-normal'>i'm open to freelance and long-term collaboration opportunities.</p>
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
                    <div key={index} className='w-full flex flex-row items-center justify-between text-center gap-2 border-t border-[#4B4B4B80] py-4'>
                    <p className='text-md text-white text-left font-normal leading-tight'>{link.title}</p>
                    <a href={link.to} target='_blank' rel='noopener noreferrer' className='text-sm text-[#4b4b4b] hover:text-[#a1a1a1] font-normal leading-normal transition-colors duration-300'>
                        {link.link} <FontAwesomeIcon icon={faUpRightFromSquare} className="h-3 w-3 ml-2" />
                    </a>
                    </div>
                ))}
                <div className='w-full flex flex-row items-center justify-between gap-2 border-t border-b border-[#4B4B4B80] py-4 mt-10'>
                    <p className='text-md text-white text-left font-normal leading-tight'>portfolio design by</p>
                    <a href="https://www.amirah.com" target='_blank'  rel='noopener noreferrer' className='text-sm text-[#4b4b4b] hover:text-[#a1a1a1] font-normal leading-normal transition-colors duration-300'>amirah, product designer <FontAwesomeIcon icon={faUpRightFromSquare} className="h-3 w-3 ml-2" /></a>
                </div>
            </div>
        </section>
            <div className='w-full max-w-[690px] flex items-center justify-center text-center mt-10'>
            <p className='text-sm text-[#4b4b4b] font-normal leading-normal'>&copy; samthewebguy {currentYear}. all rights reserved | portfolio built by Samuel Obazee </p>
        </div>
    </footer>
  )
}

export default Footer