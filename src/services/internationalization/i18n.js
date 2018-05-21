import i18n from "i18next";
// eslint-disable-next-line
import translation from "../../config/internationalization/index";

// eslint-disable-next-line
let { changeLanguage } = i18n;
changeLanguage = changeLanguage.bind(i18n);

const getActualLanguage = () => i18n.language;

export { changeLanguage };
export { getActualLanguage };
export default i18n;
