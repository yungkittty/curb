import { all, takeLatest, call, put } from "redux-saga/effects";
import signInActionsTypes from "./sign-in-actions-types";
import signInActions from "./sign-in-actions";
import signInApi from "./sign-in-api";
import appModalActions from "../app-modal/app-modal-actions";

function* signInRequestSaga(action) {
  try {
    const { data: payload } = yield call(signInApi.signIn, action.payload);
    yield put(signInActions.signInSuccess(payload));
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data || {};
    yield put(signInActions.signInFailure({ errorCode }));
  }
}

function* signOutRequestSaga() {
  try {
    yield call(signInApi.signOut);
    yield put(signInActions.signOutSuccess());
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data || {};
    yield put(signInActions.signOutFailure({ errorCode }));
  }
}

const signInSaga = all([
  takeLatest(signInActionsTypes.SIGN_IN_REQUEST, signInRequestSaga),
  takeLatest(signInActionsTypes.SIGN_OUT_REQUEST, signOutRequestSaga)
]);

export default signInSaga;
