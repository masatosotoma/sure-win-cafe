import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-theme-darkGreen text-theme-lightGreen py-12 border-t-4 border-theme-gold">
      <div className="container mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-2 text-theme-lightGold">Sure Win Cafe</h3>
          <p className="text-theme-lightGreen/70 text-sm">{t('footer.subtitle')}</p>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-theme-gold transition-colors">Facebook</a>
          <a href="#" className="hover:text-theme-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-theme-gold transition-colors">Yelp</a>
        </div>
        
        <div className="md:text-right text-theme-lightGreen/50 text-sm">
          &copy; {new Date().getFullYear()} Sure Win Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
