import I18n from 'react-native-i18n';
import enTranslation from '../assets/locales/en.json';


// ----------------------------------------------------------------------------
//         Constants
// ----------------------------------------------------------------------------
const resources = {
  en: enTranslation,
};


// ----------------------------------------------------------------------------
//         Setup
// ----------------------------------------------------------------------------
I18n.fallbacks = true; 
I18n.defaultLocale = 'en'; 
I18n.locale = 'en';
I18n.translations = resources;

const t = I18n.translate.bind(I18n);


class I18nConfig {
  getLocale() {
    return I18n.locale;
  }

  getLocales() {
    return I18n.locales;
  }

  setLocale(locale: any) {
    I18n.locale = locale
  }

  translate(text: string, args = undefined) {
    return t(text, args)
  }
}

export default I18nConfig;
