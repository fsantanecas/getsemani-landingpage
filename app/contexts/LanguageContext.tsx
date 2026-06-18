'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, T } from '../lib/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: T;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt-BR',
  setLang: () => {},
  t: translations['pt-BR'],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt-BR');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language | null;
    if (saved === 'pt-BR' || saved === 'en') setLangState(saved);
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
