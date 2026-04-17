import React from 'react'

const Hero = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Authentic Chinese Food" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4 font-serif">
          Authentic Chinese Flavors
        </h1>
        <p className="text-lg md:text-2xl text-chinese-yellow drop-shadow-md font-medium max-w-2xl mx-auto">
          Experience the exquisite taste of traditional Cantonese and Sichuan cuisine.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="px-8 py-3 bg-chinese-accentGreen hover:bg-chinese-darkGreen text-white rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            View Menu
          </a>
          <a 
            href="#hours" 
            className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Find Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
