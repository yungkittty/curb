import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { currentUserSelectors } from "../current-user";
import appModalActions from "../app-modal/app-modal-actions";
import mediasActions from "../medias/medias-actions";
import signUpActionsTypes from "./sign-up-actions-types";
import signUpActions from "./sign-up-actions";
import signUpApi from "./sign-up-api";
import usersApi from "../users/users-api";
import appAlertActions from "../app-alert/app-alert-actions";

function* signUpRequestSaga(action) {
  try {
    const { avatar, ...others } = action.payload;
    const { data: payload } = yield call(signUpApi.signUp, others);
    if (avatar) yield put(mediasActions.postMediaAvatarUserRequest({ id: payload.id, avatar }));
    yield call(usersApi.sendEmail, action.payload);
    yield put(signUpActions.signUpSuccess(payload));
    yield put(appAlertActions.pushAppAlert({ type: "success", message: "accountCreated", icon: "check" }));
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    yield put(signUpActions.signUpFailure(error));
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
