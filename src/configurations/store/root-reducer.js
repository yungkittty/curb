import { combineReducers } from "redux";
import { appLoadingReducer as appLoading } from "../../datas/app-loading";
import { appModalReducer as appModal } from "../../datas/app-modal";
import { signInReducer as signIn } from "../../datas/sign-in";
import { signUpReducer as signUp } from "../../datas/sign-up";
import { accountReducer as account } from "../../datas/account";
import { currentUserReducer as currentUser } from "../../datas/current-user";
import { currentSettingsReducer as currentSettings } from "../../datas/current-settings";
import { usersReducer as users } from "../../datas/users";
import { groupsReducer as groups } from "../../datas/groups";
import { discoveryReducer as discovery } from "../../datas/discovery";

const rootReducer = combineReducers({
  appLoading,
  appModal,
  signIn,
  signUp,
  account,
  currentUser,
  currentSettings,
  users,
  groups,
  discovery
});

export default rootReducer;
