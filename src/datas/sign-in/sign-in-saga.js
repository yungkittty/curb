import { all, takeLatest, call, put } from "redux-saga/effects";
import usersActions from "../users/users-actions";
import signInActionsTypes from "./sign-in-actions-types";
import signInActions from "./sign-in-actions";
import signInApi from "./sign-in-api";

function* signInRequestSaga({ payload }) {
  try {
    const { id, ...others } = yield call(signInApi.signIn, payload);
    yield put(usersActions.getUserRequest({ id }));
    yield put(signInActions.signInSuccess({ id, ...others }));
  } catch (error) {
    yield put(signInActions.signInFailure(error));
  }
}

function* signOutRequestSaga({ payload }) {
  try {
    yield call(signInApi.signOut, payload);
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
