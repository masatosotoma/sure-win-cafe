import React from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import DigitalMenu from './components/DigitalMenu'
import Gallery from './components/Gallery'
import OpeningHours from './components/OpeningHours'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans text-gray-800 antialiased overflow-x-hidden selection:bg-theme-gold selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <DigitalMenu />
        <Gallery />
        <OpeningHours />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
