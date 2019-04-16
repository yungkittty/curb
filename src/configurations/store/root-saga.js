import { all } from "redux-saga/effects";
import { signInSaga } from "../../datas/sign-in";
import { signUpSaga } from "../../datas/sign-up";
import { usersSaga } from "../../datas/users";
import { groupsSaga } from "../../datas/groups";
import { mediasSaga } from "../../datas/medias";
import { discoverySaga } from "../../datas/discovery";

function* rootSaga() {
  yield all([
    // eslint-disable-line
    signInSaga,
    signUpSaga,
    usersSaga,
    groupsSaga,
    mediasSaga,
    discoverySaga
  ]);
}

export default rootSaga;
