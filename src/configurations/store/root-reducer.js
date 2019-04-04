import { combineReducers } from "redux";
import { appModalReducer as appModal } from "../../datas/app-modal";
import { signInReducer as signIn } from "../../datas/sign-in";
import { signUpReducer as signUp } from "../../datas/sign-up";
import { currentUserReducer as currentUser } from "../../datas/current-user";
import { usersReducer as users } from "../../datas/users";
import { groupsReducer as groups } from "../../datas/groups";
import { discoveryReducer as discovery } from "../../datas/discovery";

const rootReducer = combineReducers({
  appModal,
  signIn,
  signUp,
  currentUser,
  users,
  groups,
  discovery
});

export default rootReducer;
