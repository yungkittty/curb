import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import signUpActionsTypes from "./sign-up-actions-types";
import signUpActions from "./sign-up-actions";
import signUpApi from "./sign-up-api";

function* signUpRequestSaga({ payload }) {
  try {
    const X = yield call(signUpApi.signUp, payload);
    yield put(signUpActions.signUpSuccess(X));
  } catch (error) {
    yield put(signUpActions.signUpFailure(error));
  }
}

const signUpSaga = [
  takeLatest(signUpActionsTypes.SIGN_UP_REQUEST, signUpRequestSaga)
];

export default signUpSaga;
