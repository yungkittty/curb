import { all } from "redux-saga/effects";
import { signInSaga } from "../../datas/sign-in";
import { signUpSaga } from "../../datas/sign-up";
import { usersSaga } from "../../datas/users";
import { groupsSaga } from "../../datas/groups";
import { discoverySaga } from "../../datas/discovery";
import { accountSaga } from "../../datas/account";

function* rootSaga() {
  yield all([
    // eslint-disable-line
    signInSaga,
    signUpSaga,
    usersSaga,
    groupsSaga,
    discoverySaga,
    accountSaga
  ]);
}

export default rootSaga;
