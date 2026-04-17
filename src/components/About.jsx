import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-chinese-yellow/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-chinese-darkGreen mb-6">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-chinese-accentGreen mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
            At <span className="text-chinese-accentGreen font-bold">Sure Win Cafe</span>, we bring the heart of China straight to Scarborough. 
            Our chefs dedicate their lives to mastering the diverse culinary arts of Cantonese and Sichuan cooking.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From our sizzling stir-fries to our delicate hand-folded dumplings, every dish is prepared with 
            traditional techniques and fresh, quality ingredients. We believe food is not just nourishment, 
            but a celebration of culture, family, and togetherness.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
