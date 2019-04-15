import i18next from "i18next";
import { initReactI18next as i18nextInit } from "react-i18next";
import i18nextLanguageDetector from "./i18next-language-detector";
import translations from "./translations";
import { currentSettingsSelectors } from "../../datas/current-settings";

const configureWithStoreI18n = ({ getState }) => {
  const lng = currentSettingsSelectors.getCurrentSettingsLanguage(getState()) || "";
  return i18next
    .createInstance()
    .use(i18nextInit)
    .use(i18nextLanguageDetector)
    .init({
      resources: translations,
      lng,
      fallbackLng: "en",
      interpolation: { escapeValue: false }
    });
};

export default configureWithStoreI18n;
