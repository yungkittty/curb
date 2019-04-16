import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { currentUserSelectors } from "../current-user";
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
    const { code: errorCode = "" } = (error.response || {}).data;
    yield put(signUpActions.signUpFailure({ errorCode }));
  }
}

function* deleteAccountRequestSaga() {
  try {
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield call(signUpApi.deleteAccount, { id: currentUserId });
    yield put(signUpActions.deleteAccountSuccess());
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    yield put(signUpActions.deleteAccountFailure(error));
  }
}

const signUpSaga = all([
  takeLatest(signUpActionsTypes.SIGN_UP_REQUEST, signUpRequestSaga),
  takeLatest(signUpActionsTypes.DELETE_ACCOUNT_REQUEST, deleteAccountRequestSaga)
]);

export default signUpSaga;
