import i18next from "i18next";
import translations from "./translations";

const configureI18n = () =>
  i18next.createInstance().init({
    resources: translations,
    fallbackLng: ["en", "fr"],
    interpolation: { escapeValue: false }
  });

export default configureI18n;
