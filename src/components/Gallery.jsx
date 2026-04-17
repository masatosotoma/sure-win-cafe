import React from 'react'

const Gallery = () => {
  const images = [
    { src: '/images/gallery-1.png', alt: 'Authentic Dumplings' },
    { src: '/images/gallery-2.png', alt: 'Handmade Noodles' },
    { src: '/images/gallery-3.png', alt: 'Wok Stir-fry' },
  ]

  return (
    <section id="gallery" className="py-24 bg-chinese-yellow/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-chinese-darkGreen mb-4">
            Gallery
          </h2>
          <div className="w-16 h-1 bg-chinese-accentGreen mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">A glimpse into our kitchen's finest.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-md h-80">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
