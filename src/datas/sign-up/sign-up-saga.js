import { all, takeLatest, select, call, take, put } from "redux-saga/effects";
import { currentUserSelectors } from "../current-user";
import appModalActions from "../app-modal/app-modal-actions";
import mediasActions from "../medias/medias-actions";
import mediasActionsTypes from "../medias/medias-actions-types";
import signUpActionsTypes from "./sign-up-actions-types";
import signUpActions from "./sign-up-actions";
import signUpApi from "./sign-up-api";

function* signUpRequestSaga(action) {
  try {
    const { name, email, password, avatar } = action.payload;
    const { data: payload } = yield call(signUpApi.signUp, { name, email, password });
    if (avatar) {
      yield put(
        mediasActions.postMediaAvatarRequest({
          target: "users",
          id: payload.id,
          avatar
        })
      );
      yield take(mediasActionsTypes.POST_MEDIA_AVATAR_SUCCESS);
    }
    yield put(signUpActions.signUpSuccess(payload));
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
