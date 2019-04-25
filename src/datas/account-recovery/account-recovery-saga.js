import { all, takeLatest, call, put } from "redux-saga/effects";
import accountRecoveryActionsTypes from "./account-recovery-actions-types";
import accountRecoveryActions from "./account-recovery-actions";
import accountRecoveryApi from "./account-recovery-api";
import appModalActions from "../app-modal/app-modal-actions";
import signInActions from "../sign-in/sign-in-actions";
import ResetPassword2 from "../../scenes/reset-password/scenes/reset-password-2";
import ResetPassword3 from "../../scenes/reset-password/scenes/reset-password-3";

function* postAccountRecoveryEmailRequestSaga(action) {
  try {
    yield call(accountRecoveryApi.postAccountRecoveryEmail, action.payload);
    yield put(accountRecoveryActions.postAccountRecoveryEmailSuccess());
    yield put(appModalActions.setAppModalScene({ scene: ResetPassword2, direction: 1 }));
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data;
    yield put(accountRecoveryActions.postAccountRecoveryEmailFailure({ errorCode }));
  }
}

function* postAccountRecoveryPasswordCodeRequestSaga(action) {
  try {
    yield call(accountRecoveryApi.postAccountRecoveryPasswordCode, action.payload);
    yield put(accountRecoveryActions.postAccountRecoveryPasswordCodeSuccess());
    yield put(appModalActions.setAppModalScene({ scene: ResetPassword3, direction: 1 }));
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data;
    yield put(accountRecoveryActions.postAccountRecoveryPasswordCodeFailure({ errorCode }));
  }
}

function* postAccountRecoveryPasswordRequestSaga(action) {
  try {
    const { email, password } = action.payload;
    yield call(accountRecoveryApi.postAccountRecoveryPassword, action.payload);
    yield put(accountRecoveryActions.postAccountRecoveryPasswordSuccess());
    yield put(signInActions.signInRequest({ email, password }));
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data;
    yield put(accountRecoveryActions.postAccountRecoveryPasswordFailure({ errorCode }));
  }
}

const accountSaga = all([
  takeLatest(
    accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_EMAIL_REQUEST,
    postAccountRecoveryEmailRequestSaga
  ),
  takeLatest(
    accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_CODE_REQUEST,
    postAccountRecoveryPasswordCodeRequestSaga
  ),
  takeLatest(
    accountRecoveryActionsTypes.POST_ACCOUNT_RECOVERY_PASSWORD_REQUEST,
    postAccountRecoveryPasswordRequestSaga
  )
]);

export default accountSaga;
