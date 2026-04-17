import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass-nav py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-chinese-darkGreen text-2xl font-serif font-bold">
          <span>Sure Win Cafe</span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
          <a href="#about" className="text-gray-700 hover:text-chinese-accentGreen transition-colors">ABOUT</a>
          <a href="#menu" className="text-gray-700 hover:text-chinese-accentGreen transition-colors">MENU</a>
          <a href="#gallery" className="text-gray-700 hover:text-chinese-accentGreen transition-colors">GALLERY</a>
          <a href="#hours" className="text-gray-700 hover:text-chinese-accentGreen transition-colors">HOURS</a>
        </div>
        <button className="md:hidden text-chinese-darkGreen">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
