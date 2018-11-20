import { all, takeLatest, call, put } from "redux-saga/effects";
import signInActions from "../sign-in/sign-in-actions";
import signUpActionsTypes from "./sign-up-actions-types";
import signUpActions from "./sign-up-actions";
import signUpApi from "./sign-up-api";

function* signUpRequestSaga({ payload }) {
  try {
    const respond = yield call(signUpApi.signUp, payload);
    yield put(signInActions.signInRequest(payload));
    yield put(signUpActions.signUpSuccess(respond));
  } catch (error) {
    yield put(signUpActions.signUpFailure(error));
  }
}

const signUpSaga = all([
  takeLatest(signUpActionsTypes.SIGN_UP_REQUEST, signUpRequestSaga)
]);

export default signUpSaga;
