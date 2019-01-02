import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { currentUserSelectors } from "../current-user";
import signInActionsTypes from "./sign-in-actions-types";
import signInActions from "./sign-in-actions";
import signInApi from "./sign-in-api";

function* signInRequestSaga({ payload }) {
  try {
    const respond = yield call(signInApi.signIn, payload);
    yield put(signInActions.signInSuccess(respond));
  } catch (error) {
    yield put(signInActions.signInFailure(error));
  }
}

function* signOutRequestSaga() {
  try {
    const token = yield select(currentUserSelectors.getCurrentUserToken);
    yield call(signInApi.signOut, token);
    yield put(signInActions.signOutSuccess());
  } catch (error) {
    yield put(signInActions.signOutFailure(error));
  }
}

const signInSaga = all([
  takeLatest(signInActionsTypes.SIGN_IN_REQUEST, signInRequestSaga),
  takeLatest(signInActionsTypes.SIGN_OUT_REQUEST, signOutRequestSaga)
]);

export default signInSaga;
