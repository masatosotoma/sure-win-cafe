import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage()

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'zh' : 'en')
  }

  return (
    <nav className="fixed w-full z-50 glass-nav py-4 border-b border-theme-gold/20">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-theme-darkGreen text-2xl font-serif font-bold">
          <span>Sure Win Cafe</span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide items-center">
          <a href="#menu" className="text-gray-700 hover:text-theme-gold transition-colors">{t('nav.menu')}</a>
          <a href="#hours" className="text-gray-700 hover:text-theme-gold transition-colors">{t('nav.hours')}</a>
          <button 
            onClick={toggleLang} 
            className="px-4 py-1.5 border-2 border-theme-gold text-theme-gold hover:bg-theme-gold hover:text-white rounded-full transition-colors"
          >
            {t('nav.switchLang')}
          </button>
        </div>
        <button className="md:hidden text-theme-darkGreen flex items-center gap-4">
          <span onClick={toggleLang} className="text-sm font-bold border border-theme-gold px-2 rounded text-theme-gold">{t('nav.switchLang')}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
