import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations";

const configureI18n = () =>
  i18next
    .createInstance()
    .use(initReactI18next)
    .init({
      resources: translations,
      lng: "en",
      fallbackLng: "en",
      interpolation: { escapeValue: false }
    });

export default configureI18n;
