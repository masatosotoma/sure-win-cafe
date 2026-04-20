import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <div id="home" className="relative h-screen flex items-center justify-center pt-16 bg-theme-darkGreen">

      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4 font-serif">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-2xl text-theme-lightGold drop-shadow-md font-medium max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="px-8 py-3 bg-theme-gold hover:bg-yellow-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            {t('hero.viewMenu')}
          </a>
          <a 
            href="#hours" 
            className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-theme-lightGold/50 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            {t('hero.findUs')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
