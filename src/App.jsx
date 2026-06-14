import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Components/Header'
import Home from './Home'
import Work from './Work'
import About from './Components/About'
import FloatingBadge from './Components/FloatingBadge'
import Services from './Components/Services'
import Stack from './Components/Stack'
import Footer from './Components/Footer'
import WorldTime from './Components/WorldTime'
import CustomCursor from './Components/CustomCursor';

// 1. Register the ScrollTrigger plugin with GSAP globally
gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    // 2. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // 3. Synchronize GSAP ScrollTrigger with Lenis updates
    lenis.on('scroll', ScrollTrigger.update);

    // 4. Hook Lenis into GSAP's high-performance ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert seconds to milliseconds for Lenis
    });

    // 5. Disable lag smoothing in GSAP for perfectly synced scroll animations
    gsap.ticker.lagSmoothing(0);

    // Clean up when the component unmounts
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Header/>
      <main>
        <FloatingBadge/>
        <WorldTime />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/work' element={<Work showTestimonial={true} />} />
          <Route path='/about' element={<About showTestimonial={true} />} />
          <Route path='/services' element={<Services showTestimonial={true} />} />
          <Route path='/stack' element={<Stack />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
