import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-chinese-darkGreen text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-2">Sure Win Cafe</h3>
          <p className="text-gray-300 text-sm">Authentic Chinese Flavors in Scarborough.</p>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-300 hover:text-chinese-yellow transition-colors">Facebook</a>
          <a href="#" className="text-gray-300 hover:text-chinese-yellow transition-colors">Instagram</a>
          <a href="#" className="text-gray-300 hover:text-chinese-yellow transition-colors">Yelp</a>
        </div>
        
        <div className="md:text-right text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Sure Win Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
