import I18nextLanguageDetector from "i18next-browser-languagedetector";

const i18nextLanguageDetector = new I18nextLanguageDetector(null, { order: ["navigator"], caches: [] });

export default i18nextLanguageDetector;
