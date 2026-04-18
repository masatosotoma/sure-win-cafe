import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-theme-bgLight relative">
      {/* Subtle traditional pattern placeholder via CSS pseudo */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-theme-darkGreen mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-theme-gold mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
            {t('about.p1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('about.p2')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
