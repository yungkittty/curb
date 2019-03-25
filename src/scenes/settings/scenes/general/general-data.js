/* eslint-disable */
import Language from "./scenes/language";
import DeleteAccount from "./scenes/delete-account";
/* eslint-enable */

const generalData = [
  {
    id: "language",
    icon: "language",
    scene: Language
  },
  {
    id: "logout",
    icon: "sign-out-alt",
    needSignedInUser: true
  },
  {
    id: "deleteAccount",
    icon: "trash-alt",
    scene: DeleteAccount,
    needSignedInUser: true
  }
];

export default generalData;
