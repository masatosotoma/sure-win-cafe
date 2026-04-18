import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Gallery = () => {
  const { t } = useLanguage()

  const images = [
    { src: '/images/gallery-1.png', alt: 'Authentic Dumplings' },
    { src: '/images/gallery-2.png', alt: 'Handmade Noodles' },
    { src: '/images/gallery-3.png', alt: 'Wok Stir-fry' },
  ]

  return (
    <section id="gallery" className="py-24 bg-theme-lightGreen/30 border-y border-theme-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-theme-darkGreen mb-4">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-1 bg-theme-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">{t('gallery.desc')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <div key={idx} className="group overflow-hidden rounded-xl shadow-lg border-2 border-transparent hover:border-theme-gold transition-all duration-500 h-80">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
