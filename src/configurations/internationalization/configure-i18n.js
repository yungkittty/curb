import i18next from "i18next";
import i18nextLngDetector from "./i18next-language-detector";
// import translations from "./translations";

const configureI18n = () =>
  i18next
    .createInstance()
    .bind(i18nextLngDetector)
    .init({
      resources: null,
      fallbackLng: "en",
      interpolation: { escapeValue: false }
    });

export default configureI18n;
