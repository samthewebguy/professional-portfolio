import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Components/Header'
import Home from './Home'
import Work from './Work'
import About from './Components/About'
import Services from './Components/Services'
import Stack from './Components/Stack'
import Footer from './Components/Footer'
import WorldTime from './Components/WorldTime'
import CustomCursor from './Components/CustomCursor';
import ScrollToTop from './Components/ScrollToTop';
import PageTransition from './Components/PageTransition';
import InitialLoader from './Components/InitialLoader';
import FloatingDock from './Components/FloatingDock';
import FloatingBadge from './Components/FloatingBadge'
import SEOManager from './Components/SEOManager';

// 1. Register the ScrollTrigger plugin with GSAP globally
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (

    <>
    <SEOManager />

    {!hasLoaded && <InitialLoader onComplete={() => setHasLoaded(true)} />}
      <PageTransition />
      <ScrollToTop lenisRef={lenisRef} />
      <CustomCursor />
      <Header hasLoaded={hasLoaded}/>
      <main>
        <WorldTime />
        <Routes>
          <Route path='/' element={<Home hasLoaded={hasLoaded}/>} />
          <Route path='/work' element={<Work showTestimonial={true} />} />
          <Route path='/about' element={<About showTestimonial={true} />} />
          <Route path='/services' element={<Services showTestimonial={true} hasLoaded={hasLoaded} />} />
          <Route path='/stack' element={<Stack />} />
        </Routes>
        <FloatingDock />
        <FloatingBadge />
      </main>
      <Footer />
  </>

  )
}

export default App
