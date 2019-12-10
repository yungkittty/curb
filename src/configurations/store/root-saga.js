import { all } from "redux-saga/effects";
import { signUpSaga } from "../../datas/sign-up";
import { signInSaga } from "../../datas/sign-in";
import { accountSaga } from "../../datas/account";
import { accountRecoverySaga } from "../../datas/account-recovery";
import { usersSaga } from "../../datas/users";
import { groupsSaga } from "../../datas/groups";
import { chatsSaga } from "../../datas/chats";
import { mediasSaga } from "../../datas/medias";
import { discoverySaga } from "../../datas/discovery";
import { feedbackSaga } from "../../datas/feedback";

function* rootSaga() {
  yield all([
    signUpSaga,
    signInSaga,
    accountSaga,
    accountRecoverySaga,
    usersSaga,
    groupsSaga,
    chatsSaga,
    mediasSaga,
    discoverySaga,
    feedbackSaga
  ]);
}

export default rootSaga;
