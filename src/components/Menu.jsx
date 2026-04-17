import React, { useState } from 'react'

const Menu = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  
  const menuImages = [
    { id: 1, src: '/images/menu-1.png', alt: 'Menu Page 1' },
    { id: 2, src: '/images/menu-2.png', alt: 'Menu Page 2' },
    { id: 3, src: '/images/menu-3.png', alt: 'Menu Page 3' },
  ]

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-chinese-darkGreen mb-4">
            Our Menu
          </h2>
          <div className="w-16 h-1 bg-chinese-accentGreen mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Please refer to the menu images below to see our authentic offerings. <br/>
            <span className="text-sm font-medium text-chinese-accentGreen">Click on any image to enlarge.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImg(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/opacity-0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white bg-black/60 px-4 py-2 rounded-full font-medium transition-opacity duration-300 backdrop-blur-sm">
                  Click to Zoom
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm cursor-zoom-out transition-opacity duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 md:top-0 md:-right-8 text-white hover:text-chinese-yellow z-50 text-4xl leading-none"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              &times;
            </button>
            <img 
              src={selectedImg} 
              alt="Enlarged Menu" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image to allow pinch zoom on mobile natively if supported by browser.
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Menu
