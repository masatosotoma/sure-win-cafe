import React from 'react'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const OpeningHours = () => {
  return (
    <section id="hours" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Info Side */}
          <div className="space-y-8 bg-chinese-yellow/10 p-8 rounded-3xl border border-chinese-yellow/20 shadow-sm">
            <div>
              <h2 className="text-3xl font-serif font-bold text-chinese-darkGreen mb-2">Visit Us</h2>
              <div className="w-12 h-1 bg-chinese-accentGreen mb-6 rounded-full"></div>
              <p className="text-gray-600 font-medium">
                We're located in the heart of Scarborough, bringing you the authentic taste of China.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-chinese-accentGreen shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    123 Chinese Taste Ave,<br />
                    Scarborough, ON M1V 2A3<br />
                    Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-chinese-accentGreen shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Opening Hours</h4>
                  <ul className="text-gray-600 space-y-1 mt-1">
                    <li className="flex justify-between w-48"><span>Mon - Thu:</span> <span>11:00 AM - 10:00 PM</span></li>
                    <li className="flex justify-between w-48 text-chinese-darkGreen font-semibold"><span>Fri - Sun:</span> <span>11:00 AM - 11:00 PM</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-chinese-accentGreen shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800">Contact</h4>
                  <p className="text-gray-600 text-lg font-medium tracking-wide">
                    (416) 555-0198
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
               <button className="w-full md:w-auto px-8 py-3 bg-chinese-darkGreen hover:bg-chinese-accentGreen text-white rounded-lg font-semibold transition-colors duration-300 shadow-md">
                 Reserve a Table
               </button>
            </div>
          </div>

          {/* Image/Map Placeholder Side */}
          <div className="h-full min-h-[400px] bg-chinese-darkGreen rounded-3xl overflow-hidden relative shadow-xl">
             <img src="/images/hero.png" alt="Restaurant Ambiance" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                 <h3 className="text-white text-3xl font-serif font-bold mb-4 drop-shadow-md">Sure Win Cafe</h3>
                 <p className="text-chinese-yellow font-medium text-lg drop-shadow">Dine-in • Takeout • Delivery</p>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default OpeningHours
