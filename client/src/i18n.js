import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import english from "./translation/English/translation.json"
import french from "./translation/French/translation.json"


const resources = {
    en: {
        translation: english
    },
    fr: {
        translation: french
    }
}

export const supportedLngs = {
    en: "English",
    fr: "French (Français)",
};


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        //lng: 'en', // default language
        fallbackLng: 'en', // fallback language
        supportedLngs: Object.keys(supportedLngs),
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;