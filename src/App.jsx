import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import OpeningHours from './components/OpeningHours'
import Footer from './components/Footer'

function App() {
  
  // Minimal scroll effect for navbar could be added here if needed, 
  // but CSS backdrop-blur usually suffices for a clean look.
  
  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden selection:bg-chinese-accentGreen selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <OpeningHours />
      <Footer />
    </div>
  )
}

export default App
