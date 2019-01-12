import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { currentUserSelectors } from "../current-user";
import signInActionsTypes from "./sign-in-actions-types";
import signInActions from "./sign-in-actions";
import signInApi from "./sign-in-api";

function* signInRequestSaga(action) {
  try {
    const { data: payload } = yield call(signInApi.signIn, action.payload);
    yield put(signInActions.signInSuccess(payload));
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
