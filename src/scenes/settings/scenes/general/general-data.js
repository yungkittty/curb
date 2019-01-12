/* eslint-disable-next-line */
import Language from "./scenes/language";
/* eslint-disable-next-line */
import DeleteAccount from "./scenes/delete-account";

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
