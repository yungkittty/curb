import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";
import signInActionsTypes from "./sign-in-actions-types";
import signInActions from "./sign-in-actions";
import signInApi from "./sign-in-api";

function* signInRequestSaga({ payload }) {
  try {
    const X = yield call(signInApi.signIn, payload);
    yield put(signInActions.signInFailure(X));
  } catch (error) {
    yield put(signInActions.signInSuccess(error));
  }
}

function* signOutRequestSaga({ payload }) {
  try {
    const X = yield call(signInApi.signOut, payload);
    yield put(signInActions.signOutSuccess(X));
  } catch (error) {
    yield put(signInActions.signOutFailure(error));
  }
}

const signInSaga = [
  takeLatest(signInActionsTypes.SIGN_IN_REQUEST, signInRequestSaga),
  takeLatest(signInActionsTypes.SIGN_OUT_REQUEST, signOutRequestSaga)
];

export default signInSaga;
