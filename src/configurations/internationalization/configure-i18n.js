import i18next from "i18next";
import i18nextLanguageDetector from "./i18next-language-detector";
import translations from "./translations";

const configureI18n = () =>
  i18next
    .createInstance()
    .use(i18nextLanguageDetector)
    .init({
      resources: translations,
      fallbackLng: "en",
      interpolation: { escapeValue: false }
    });

export default configureI18n;
