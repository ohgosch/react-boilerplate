import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBR from 'logic/locales/pt-BR.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'pt-BR',
  lng: 'pt-BR',
  resources: {
    'pt-BR': {
      translation: ptBR,
    },
  },
});

export default i18n;
