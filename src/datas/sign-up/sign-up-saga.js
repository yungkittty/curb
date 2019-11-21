import { all, takeLatest, call, put } from "redux-saga/effects";
import signUpActionsTypes from "./sign-up-actions-types";
import signUpActions from "./sign-up-actions";
import signUpApi from "./sign-up-api";
import appModalActions from "../app-modal/app-modal-actions";
import appAlertActions from "../app-alert/app-alert-actions";
import mediasActions from "../medias/medias-actions";

function* signUpRequestSaga(action) {
  try {
    const { avatar = {}, ...others } = action.payload;
    const { data: payload } = yield call(signUpApi.signUp, others);
    if (avatar.file) yield put(mediasActions.postMediaAvatarUserRequest({ id: payload.id, avatar }));
    yield put(signUpActions.signUpSuccess(payload));
    const successAlert = { type: "success", message: "accountCreated", icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    const errorAlert = (() => {
      switch (errorCode) {
        case "USERS_DUPLICATE_NAME":
          return { type: "error", message: "accountDuplicatedName", icon: "times" };
        case "ACCOUNTS_DUPLICATE_EMAIL":
          return { type: "error", message: "accountDuplicatedEmail", icon: "times" };
        default:
          return { type: "error", message: "other", icon: "times" };
      }
    })();
    yield put(appAlertActions.pushAppAlert(errorAlert));
    yield put(signUpActions.signUpFailure({ errorCode }));
  }
}

const signUpSaga = all([
  // eslint-disable-line
  takeLatest(signUpActionsTypes.SIGN_UP_REQUEST, signUpRequestSaga)
]);

export default signUpSaga;
