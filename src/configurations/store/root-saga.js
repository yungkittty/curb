import { all } from "redux-saga/effects";
import { signInSaga } from "../../datas/sign-in";
import { signUpSaga } from "../../datas/sign-up";
import { usersSaga } from "../../datas/users";
import { groupsSaga } from "../../datas/groups";
import { discoverySaga } from "../../datas/discovery";

function* rootSaga() {
  yield all([
    // eslint-disable-next-line
    signInSaga,
    signUpSaga,
    usersSaga,
    groupsSaga,
    discoverySaga
  ]);
}

export default rootSaga;
