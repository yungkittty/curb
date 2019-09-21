import { all } from "redux-saga/effects";
import { signUpSaga } from "../../datas/sign-up";
import { signInSaga } from "../../datas/sign-in";
import { accountSaga } from "../../datas/account";
import { accountRecoverySaga } from "../../datas/account-recovery";
import { usersSaga } from "../../datas/users";
import { groupsSaga } from "../../datas/groups";
import { mediasSaga } from "../../datas/medias";
import { postsSaga } from "../../datas/posts";
import { discoverySaga } from "../../datas/discovery";

function* rootSaga() {
  yield all([
    signUpSaga,
    signInSaga,
    accountSaga,
    accountRecoverySaga,
    usersSaga,
    groupsSaga,
    postsSaga,
    mediasSaga,
    discoverySaga
  ]);
}

export default rootSaga;
