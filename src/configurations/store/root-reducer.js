import { combineReducers } from "redux";
import { appModalReducer as appModal } from "../../datas/app-modal";
import { appAlertReducer as appAlert } from "../../datas/app-alert";
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
import { feedbackReducer as feedback } from "../../datas/feedback";

const rootReducer = combineReducers({
  appModal,
  appAlert,
  signUp,
  signIn,
  account,
  accountRecovery,
  currentUser,
  currentSettings,
  users,
  groups,
  medias,
  discovery,
  feedback
});

export default rootReducer;
