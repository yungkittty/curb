import { all, takeLatest, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import mediasActionsTypes from "./medias-actions-types";
import mediasActions from "./medias-actions";
import mediasApi from "./medias-api";
import appAlertActions from "../app-alert/app-alert-actions";

function* getMediaRequestSaga(action) {
  try {
    const { data: payload } = yield call(mediasApi.getMedia, action.payload);
    yield put(mediasActions.getMediaSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.getMediaFailure({ id: action.payload.id, errorCode }));
  }
}

function* postMediaAvatarUserRequestSaga(action) {
  try {
    const { id, avatar, onSuccessAlert: successAlert } = action.payload;
    yield call(mediasApi.postMediaAvatarUser, action.payload);
    yield put(mediasActions.postMediaAvatarUserSuccess({ id, avatar }));
    if (successAlert) yield put(appAlertActions.pushAppAlert(successAlert));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaAvatarUserFailure({ errorCode }));
    const errorAlert = { type: "error", message: `postAvatar.${errorCode}`, icon: "times" };
    yield put(appAlertActions.pushAppAlert(errorAlert));
  }
}

function* postMediaAvatarGroupRequestSaga(action) {
  try {
    const { id, avatar, onSuccessAlert: successAlert } = action.payload;
    yield call(mediasApi.postMediaAvatarGroup, action.payload);
    yield put(mediasActions.postMediaAvatarGroupSuccess({ id, avatar }));
    if (successAlert) yield put(appAlertActions.pushAppAlert(successAlert));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaAvatarGroupFailure({ errorCode }));
    const errorAlert = { type: "error", message: `postAvatar.${errorCode}`, icon: "times" };
    yield put(appAlertActions.pushAppAlert(errorAlert));
  }
}

function* postMediaTextRequestSaga(payload) {
  try {
    yield call(mediasApi.postMediaText, payload);
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaTextFailure({ errorCode }));
  }
}

function* postMediaImageRequestSaga(payload) {
  try {
    yield call(mediasApi.postMediaImage, payload);
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaImageFailure({ errorCode }));
  }
}

function* postMediaVideoRequestSaga(payload) {
  try {
    yield call(mediasApi.postMediaVideo, payload);
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaVideoFailure({ errorCode }));
  }
}

function* postMediaLocationRequestSaga(payload) {
  try {
    yield call(mediasApi.postMediaLocation, payload);
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaLocationFailure({ errorCode }));
  }
}

const mediasSaga = all([
  takeNormalize(mediasActionsTypes.GET_MEDIA_REQUEST, getMediaRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_AVATAR_USER_REQUEST, postMediaAvatarUserRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_REQUEST, postMediaAvatarGroupRequestSaga)
]);

export {
  postMediaTextRequestSaga,
  postMediaImageRequestSaga,
  postMediaVideoRequestSaga,
  postMediaLocationRequestSaga
};

export default mediasSaga;
