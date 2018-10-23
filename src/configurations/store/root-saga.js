import { all } from "redux-saga/effects";
import { signInSaga } from "../../datas/sign-in";
import { signUpSaga } from "../../datas/sign-up";

function* rootSaga() { yield all([signInSaga, signUpSaga]); }

export default rootSaga;
