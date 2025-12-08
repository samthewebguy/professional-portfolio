import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Home'
import Work from './Work'
import About from './Components/About'
import FloatingBadge from './Components/FloatingBadge'
import Services from './Components/Services'
import Stack from './Components/Stack'
import Footer from './Components/Footer'
import WorldTime from './Components/WorldTime'

function App() {

  return (
    <>
      <Header/>
      <FloatingBadge/>
      <WorldTime />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/stack' element={<Stack />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
