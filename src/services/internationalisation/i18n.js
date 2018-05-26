import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import LngDetector, {
  optionDetection
} from "./language-detection";
import translation from "../../configurations/internationalisation/";

const initI18n = {
  debug: false,
  detection: optionDetection,
  fallbackLng: "en",
  react: {
    defaultTransParent: "div",
    wait: true
  }
};

function onI18ntError(err) {
  return err
    ? console.log("I18next instaciation failed with:", err)
    : null;
}

i18n
  .use(LngDetector)
  .use(reactI18nextModule)
  .init(initI18n, onI18ntError);

Object.keys(translation).forEach(namespace => {
  Object.keys(translation[namespace]).forEach(language => {
    i18n.addResourceBundle(
      language,
      namespace,
      translation[namespace][language],
      true,
      false
    );
  });
});

i18n.setDefaultNamespace(Object.keys(translation)[0]);
function changeLanguage(lng) {
  return i18n.changeLanguage(lng);
}

function getActualLanguage() {
  return i18n.language;
}

export { changeLanguage };
export { getActualLanguage };
export default i18n;
