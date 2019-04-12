import { all, takeLatest, call, put } from "redux-saga/effects";
import appModalActions from "../app-modal/app-modal-actions";
import signUpActionsTypes from "./sign-up-actions-types";
import signUpActions from "./sign-up-actions";
import signUpApi from "./sign-up-api";

function* signUpRequestSaga(action) {
  try {
    const { data: payload } = yield call(signUpApi.signUp, action.payload);
    yield put(signUpActions.signUpSuccess(payload));
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    yield put(signUpActions.signUpFailure(error));
  }
}

const signUpSaga = all([
  takeLatest(signUpActionsTypes.SIGN_UP_REQUEST, signUpRequestSaga)
]);

export default signUpSaga;
