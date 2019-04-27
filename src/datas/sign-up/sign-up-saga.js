import { all, takeLatest, call, put } from "redux-saga/effects";
import signUpActionsTypes from "./sign-up-actions-types";
import signUpActions from "./sign-up-actions";
import signUpApi from "./sign-up-api";
import appModalActions from "../app-modal/app-modal-actions";

function* signUpRequestSaga(action) {
  try {
    const { data: payload } = yield call(signUpApi.signUp, action.payload);
    yield put(signUpActions.signUpSuccess(payload));
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data || {};
    yield put(signUpActions.signUpFailure({ errorCode }));
  }
}

const signUpSaga = all([
  // eslint-disable-line
  takeLatest(signUpActionsTypes.SIGN_UP_REQUEST, signUpRequestSaga)
]);

export default signUpSaga;
