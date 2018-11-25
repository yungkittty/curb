import { all } from "redux-saga/effects";
import { signInSaga } from "../../datas/sign-in";
import { signUpSaga } from "../../datas/sign-up";
import { usersSaga } from "../../datas/users";

function* rootSaga() { yield all([signInSaga, signUpSaga, usersSaga]); }

export default rootSaga;
