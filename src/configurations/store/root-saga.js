import { all } from "redux-saga/effects";
import { signUpSaga } from "../../datas/sign-up";
import { signInSaga } from "../../datas/sign-in";
import { accountRecoverySaga } from "../../datas/account-recovery";
import { usersSaga } from "../../datas/users";
import { groupsSaga } from "../../datas/groups";
import { discoverySaga } from "../../datas/discovery";
import { mediasSaga } from "../../datas/medias";
import { accountSaga } from "../../datas/account";

function* rootSaga() {
  yield all([
    signUpSaga,
    signInSaga,
    accountSaga,
    accountRecoverySaga,
    usersSaga,
    groupsSaga,
    discoverySaga,
    mediasSaga,
    accountSaga
  ]);
}

export default rootSaga;
