import { combineReducers } from "redux";
import { appModalReducer as appModal } from "../../datas/app-modal";
import { appAlertReducer as appAlert } from "../../datas/app-alert";
import { signInReducer as signIn } from "../../datas/sign-in";
import { signUpReducer as signUp } from "../../datas/sign-up";
import { currentUserReducer as currentUser } from "../../datas/current-user";
import { currentSettingsReducer as currentSettings } from "../../datas/current-settings";
import { usersReducer as users } from "../../datas/users";
import { groupsReducer as groups } from "../../datas/groups";
import { discoveryReducer as discovery } from "../../datas/discovery";
import { mediasReducer as medias } from "../../datas/medias";

const rootReducer = combineReducers({
  appModal,
  appAlert,
  signIn,
  signUp,
  currentUser,
  currentSettings,
  users,
  groups,
  discovery,
  medias
});

export default rootReducer;
