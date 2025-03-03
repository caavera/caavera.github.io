import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";

// Obtener el idioma guardado en localStorage o usar español por defecto
const storedLang = localStorage.getItem("lang") || "es";

i18n
    .use(initReactI18next) // Integrar con React
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es }
        },
        lng: storedLang, // Establecer idioma inicial
        fallbackLng: "es", // Si no encuentra el idioma, usa español
        interpolation: {
            escapeValue: false // Evita problemas de seguridad con React
        }
    });

export default i18n;
