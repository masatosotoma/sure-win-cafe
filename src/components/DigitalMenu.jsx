import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const DigitalMenu = () => {
  const { t, getMenu } = useLanguage();
  const menuData = getMenu();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-theme-darkGreen mb-4">
            {t('menuSection.title')}
          </h2>
          <div className="w-24 h-1 bg-theme-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            {t('menuSection.desc')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === idx 
                ? 'bg-theme-darkGreen text-white shadow-lg' 
                : 'bg-theme-lightGreen text-theme-darkGreen hover:bg-theme-jade hover:text-white'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="bg-theme-bgLight p-8 rounded-3xl shadow-xl border border-theme-gold/10">
          <div className="mb-8 text-center border-b border-theme-gold/20 pb-4">
             <h3 className="text-2xl font-serif text-theme-gold font-bold">{menuData[activeCategory].category}</h3>
             <p className="text-gray-500 font-medium mt-2">{menuData[activeCategory].priceHint}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {menuData[activeCategory].items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-end border-b border-gray-200 border-dashed pb-2 hover:border-theme-gold transition-colors">
                 <div>
                    <span className="text-theme-gold font-bold mr-3">{item.id}</span>
                    <span className="text-gray-800 font-medium tracking-wide">{item.name}</span>
                 </div>
                 {item.price && (
                   <span className="text-theme-darkGreen font-semibold ml-4">{item.price}</span>
                 )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalMenu;
