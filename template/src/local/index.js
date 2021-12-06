import i18n from 'i18next';
import {initReactI18next,useTranslation} from 'react-i18next';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
 
  en:require("./en.json"),
  ar:require("./ar.json")
};
 
  i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
 
    resources: resources,
  
    // have a common namespace used around the full app
    ns: ['translation'],
    defaultNS: 'translation',
  
    debug: false,
   
  
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });
  
 
  
 
  export function reloadApp(language) {

    const isRTL = i18n.dir(language) === 'rtl';
    I18nManager.forceRTL(isRTL);
    
  
    if (isRTL !== I18nManager.isRTL) {
      RNRestart.Restart();
       
    }
  }

export default i18n;