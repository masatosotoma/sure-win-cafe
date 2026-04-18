import React from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const OpeningHours = () => {
  const { t } = useLanguage()

  return (
    <section id="hours" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 bg-theme-bgLight p-8 rounded-3xl border border-theme-gold/20 shadow-lg">
            <div>
              <h2 className="text-3xl font-serif font-bold text-theme-darkGreen mb-2">{t('hours.title')}</h2>
              <div className="w-16 h-1 bg-theme-gold mb-6 rounded-full"></div>
              <p className="text-gray-600 font-medium">
                {t('hours.desc')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-theme-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-theme-darkGreen">{t('hours.location')}</h4>
                  <p className="text-gray-600 leading-relaxed mt-1">
                    123 Chinese Taste Ave,<br />
                    Scarborough, ON M1V 2A3<br />
                    Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-theme-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-theme-darkGreen">{t('hours.opening')}</h4>
                  <ul className="text-gray-600 space-y-1 mt-1">
                    <li className="flex justify-between w-48"><span>Mon - Thu:</span> <span>11:00 AM - 10:00 PM</span></li>
                    <li className="flex justify-between w-48 text-theme-darkGreen font-bold"><span>Fri - Sun:</span> <span>11:00 AM - 11:00 PM</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-theme-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-theme-darkGreen">{t('hours.contact')}</h4>
                  <p className="text-gray-600 font-medium tracking-wide mt-1">
                    (416) 555-0198
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
               <button className="w-full md:w-auto px-8 py-3 bg-theme-darkGreen hover:bg-theme-jade text-white rounded-lg font-semibold transition-colors duration-300 shadow-md">
                 {t('hours.reserve')}
               </button>
            </div>
          </div>

          <div className="h-full min-h-[400px] bg-theme-darkGreen rounded-3xl overflow-hidden relative shadow-xl border-4 border-theme-lightGold">
             <img src="/images/hero.png" alt="Restaurant Ambiance" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-theme-darkGreen/40">
                 <h3 className="text-theme-lightGold text-3xl font-serif font-bold mb-4 drop-shadow-lg border-y border-theme-gold py-2">Sure Win Cafe</h3>
                 <p className="text-white font-medium text-lg drop-shadow">{t('hours.dineIn')}</p>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default OpeningHours
