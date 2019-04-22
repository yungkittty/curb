import { all, takeLatest, call, put } from "redux-saga/effects";
import signInActions from "../sign-in/sign-in-actions";
import appModalActions from "../app-modal/app-modal-actions";
import accountActionsTypes from "./account-actions-types";
import accountActions from "./account-actions";
import accountApi from "./account-api";
/* eslint-disable */
import ResetPassword2 from "../../scenes/reset-password/scenes/reset-password-2";
import ResetPassword3 from "../../scenes/reset-password/scenes/reset-password-3";
/* eslint-enable */

function* requestAccountResetPasswordCodeRequestSaga(action) {
  try {
    yield call(accountApi.requestCode, action.payload);
    yield put(accountActions.requestAccountResetPasswordCodeSuccess());
    yield put(
      appModalActions.setAppModalScene({
        scene: ResetPassword2,
        direction: 1
      })
    );
  } catch (error) {
    yield put(accountActions.requestAccountResetPasswordCodeFailure(error));
  }
}

function* validateAccountResetPasswordCodeRequestSaga(action) {
  try {
    yield call(accountApi.validateCode, action.payload);
    yield put(accountActions.validateAccountResetPasswordCodeSuccess());
    yield put(
      appModalActions.setAppModalScene({
        scene: ResetPassword3,
        direction: 1
      })
    );
  } catch (error) {
    yield put(accountActions.validateAccountResetPasswordCodeFailure(error));
  }
}

function* resetAccountPasswordRequestSaga(action) {
  try {
    const { email, password } = action.payload;
    yield call(accountApi.resetPass, action.payload);
    yield put(accountActions.resetAccountPasswordSuccess());
    yield put(signInActions.signInRequest({ email, password }));
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    yield put(accountActions.resetAccountPasswordFailure(error));
  }
}

const accountSaga = all([
  takeLatest(
    accountActionsTypes.REQUEST_ACCOUNT_RESET_PASSWORD_CODE_REQUEST,
    requestAccountResetPasswordCodeRequestSaga
  ),
  takeLatest(
    accountActionsTypes.VALIDATE_ACCOUNT_RESET_PASSWORD_CODE_REQUEST,
    validateAccountResetPasswordCodeRequestSaga
  ),
  takeLatest(accountActionsTypes.RESET_ACCOUNT_PASSWORD_REQUEST, resetAccountPasswordRequestSaga)
]);

export default accountSaga;
