import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import translationEN from './en/translation.json';
import translationVI from './vi/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    vi: {
        translation: translationVI
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'vi',
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie']
        },
        react: { useSuspense: false }
    });

export default i18n;

