import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { currentUserSelectors } from "../current-user";
import signInActions from "../sign-in/sign-in-actions";
import signUpActionsTypes from "./sign-up-actions-types";
import signUpActions from "./sign-up-actions";
import signUpApi from "./sign-up-api";

function* signUpRequestSaga(action) {
  try {
    yield call(signUpApi.signUp, action.payload);
    yield put(signInActions.signInRequest(action.payload));
    yield put(signUpActions.signUpSuccess());
  } catch (error) {
    yield put(signUpActions.signUpFailure(error));
  }
}

function* deleteAccountRequestSaga() {
  try {
    const id = yield select(currentUserSelectors.getCurrentUserId);
    const token = yield select(currentUserSelectors.getCurrentUserToken);
    yield call(signUpApi.deleteAccount, { id, token });
    yield put(signUpActions.deleteAccountSuccess());
  } catch (error) {
    yield put(signUpActions.deleteAccountFailure(error));
  }
}

const signUpSaga = all([
  takeLatest(signUpActionsTypes.SIGN_UP_REQUEST, signUpRequestSaga),
  takeLatest(
    signUpActionsTypes.DELETE_ACCOUNT_REQUEST,
    deleteAccountRequestSaga
  )
]);

export default signUpSaga;
