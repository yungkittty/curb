import { combineReducers } from "redux";
import { appModalReducer as appModal } from "../../datas/app-modal";
import { appNavigationReducer as appNavigation } from "../../datas/app-navigation";
import { signUpReducer as signUp } from "../../datas/sign-up";
import { signInReducer as signIn } from "../../datas/sign-in";
import { accountReducer as account } from "../../datas/account";
import { accountRecoveryReducer as accountRecovery } from "../../datas/account-recovery";
import { currentUserReducer as currentUser } from "../../datas/current-user";
import { currentSettingsReducer as currentSettings } from "../../datas/current-settings";
import { usersReducer as users } from "../../datas/users";
import { groupsReducer as groups } from "../../datas/groups";
import { mediasReducer as medias } from "../../datas/medias";
import { discoveryReducer as discovery } from "../../datas/discovery";
import { platformBools } from "../platform";

const rootReducer = combineReducers({
  appModal,
  ...(platformBools.isReactNative ? { appNavigation } : {}),
  signUp,
  signIn,
  account,
  accountRecovery,
  currentUser,
  currentSettings,
  users,
  groups,
  medias,
  discovery
});

export default rootReducer;
