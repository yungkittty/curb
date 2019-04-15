/* eslint-disable */
import GeneralLanguage from "./scenes/general-language";
import GeneralDeleteAccount from "./scenes/general-delete-account";
/* eslint-enable */

const settingsGeneralData = [
  {
    id: "language",
    icon: "language",
    scene: GeneralLanguage
  },
  {
    id: "logout",
    icon: "sign-out-alt",
    needSignedInUser: true
  },
  {
    id: "deleteAccount",
    icon: "trash-alt",
    scene: GeneralDeleteAccount,
    needSignedInUser: true
  }
];

export default settingsGeneralData;
