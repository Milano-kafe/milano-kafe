import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'tr' | 'en' | 'ru' | 'kr';

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  uz: {
    welcome: 'Xush kelibsiz',
    menu: 'Menyu',
    cart: 'Savat',
    contact: 'Aloqa',
    profile: 'Profil',
    // Add more translations as needed
  },
  tr: {
    welcome: 'Hoş geldiniz',
    menu: 'Menü',
    cart: 'Sepet',
    contact: 'İletişim',
    profile: 'Profil',
    // Add more translations as needed
  },
  en: {
    welcome: 'Welcome',
    menu: 'Menu',
    cart: 'Cart',
    contact: 'Contact',
    profile: 'Profile',
    // Add more translations as needed
  },
  ru: {
    welcome: 'Добро пожаловать',
    menu: 'Меню',
    cart: 'Корзина',
    contact: 'Контакт',
    profile: 'Профиль',
    // Add more translations as needed
  },
  kr: {
    welcome: '환영합니다',
    menu: '메뉴',
    cart: '장바구니',
    contact: '연락처',
    profile: '프로필',
    // Add more translations as needed
  },
};

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translate = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};