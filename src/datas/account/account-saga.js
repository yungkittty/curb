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

function* emailResetPassRequestSaga(action) {
  try {
    yield call(accountApi.emailResetPass, action.payload);
    yield put(accountActions.emailResetPassSuccess());
    yield put(
      appModalActions.setAppModalScene({
        scene: ResetPassword2,
        direction: 1
      })
    );
  } catch (error) {
    yield put(accountActions.emailResetPassFailure(error));
  }
}

function* validateCodeRequestSaga(action) {
  try {
    yield call(accountApi.validateCode, action.payload);
    yield put(accountActions.validateCodeSuccess());
    yield put(
      appModalActions.setAppModalScene({
        scene: ResetPassword3,
        direction: 1
      })
    );
  } catch (error) {
    yield put(accountActions.validateCodeFailure(error));
  }
}

function* resetPassRequestSaga(action) {
  try {
    const { email, password } = action.payload;
    yield call(accountApi.resetPass, action.payload);
    yield put(accountActions.resetPassSuccess());
    yield put(signInActions.signInRequest({ email, password }));
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    yield put(accountActions.resetPassFailure(error));
  }
}

const accountSaga = all([
  takeLatest(accountActionsTypes.EMAIL_RESETPASS_REQUEST, emailResetPassRequestSaga),
  takeLatest(accountActionsTypes.VALIDATE_CODE_REQUEST, validateCodeRequestSaga),
  takeLatest(accountActionsTypes.RESET_PASS_REQUEST, resetPassRequestSaga)
]);

export default accountSaga;
