import i18next from "i18next";
import { initReactI18next as i18nextInit } from "react-i18next";
import i18nextLanguageDetector from "./i18next-language-detector";
import i18nextTranslations from "./i18next-translations";
import { currentSettingsSelectors } from "../../datas/current-settings";

const configureI18n = ({ getState }) => {
  const currentSettingsLanguage =
    // eslint-disable-next-line
    currentSettingsSelectors.getCurrentSettingsLanguage(getState());
  return i18next
    .createInstance()
    .use(i18nextInit)
    .use(i18nextLanguageDetector)
    .init({
      resources: i18nextTranslations,
      ...(currentSettingsLanguage ? { lng: currentSettingsLanguage } : {}),
      fallbackLng: "en",
      interpolation: { escapeValue: false }
    });
};

export default configureI18n;
