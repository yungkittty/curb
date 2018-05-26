import LngDetector from "i18next-browser-languagedetector";

const LOCAL_STORAGE_I18N = "i18language";

export const optionDetection = {
  order: ["localStorage", "navigator"],
  lookupLocalStorage: LOCAL_STORAGE_I18N,
  caches: ["localStorage"]
};

export default LngDetector;
