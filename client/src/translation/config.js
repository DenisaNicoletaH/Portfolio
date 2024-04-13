import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
        en: {
            translations: require('./translation/en/translation.json')
        },
        es: {
            translations: require('./translation/fr/translation.json')
        }
    },
    ns: ['translation'],
    defaultNS: 'translation'
});

i18n.languages = ['en', 'fr'];

export default i18n;