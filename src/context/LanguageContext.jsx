import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let current = translations[language];
    for (let k of keys) {
      if (current[k] === undefined) return key;
      current = current[k];
    }
    return current;
  };

  const getMenu = () => translations[language].menu;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getMenu }}>
      {children}
    </LanguageContext.Provider>
  );
};
