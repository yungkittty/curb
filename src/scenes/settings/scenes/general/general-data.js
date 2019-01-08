/* eslint-disable-next-line */
import Language from "./scenes/language";
/* eslint-disable-next-line */
import DeleteAccount from "./scenes/delete-account";

const generalData = [
  {
    id: "language",
    title: "Language",
    description: "Display language of the application",
    icon: "language",
    scene: Language
  },
  {
    id: "logout",
    title: "Logout",
    description: "Disconnect your account from this device",
    icon: "sign-out-alt"
  },
  {
    id: "delete-account",
    title: "Delete account",
    description: "Permanently delete your account",
    icon: "trash-alt",
    scene: DeleteAccount
  }
];

export default generalData;
