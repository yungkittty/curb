import i18next from "i18next";
import { initReactI18next as i18nextInit } from "react-i18next";
import * as RNLocalize from "react-native-localize";
import translations from "./translations";
import { currentSettingsSelectors } from "../../datas/current-settings";

const configureWithStoreI18n = ({ getState }) => {
  const lng =
    currentSettingsSelectors.getCurrentSettingsLanguage(getState()) ||
    (RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || {}).languageTag ||
    "";
  return i18next
    .createInstance()
    .use(i18nextInit)
    .init({
      resources: translations,
      lng,
      fallbackLng: "en",
      interpolation: { escapeValue: false }
    });
};

export default configureWithStoreI18n;
