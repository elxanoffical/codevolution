import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import azTranslation from './locales/az.json';

i18n
  .use(LanguageDetector)           // otomatik dil tespiti
  .use(initReactI18next)           // React ile kullanım
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: { translation: enTranslation },
      az: { translation: azTranslation },
    },
    interpolation: {
      escapeValue: false,          // React zaten XSS koruması yapar
    },
  });

export default i18n;
