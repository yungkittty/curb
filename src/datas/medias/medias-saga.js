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

function* postMediaTextRequestSaga(action) {
  try {
    const { data: payload } = yield call(mediasApi.postMediaText, action.payload);
    yield put(mediasActions.postMediaTextSuccess({ id: action.payload.postId, mediasId: payload.id }));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaTextFailure({ errorCode }));
  }
}

function* postMediaImageRequestSaga(action) {
  try {
    const { data: payload } = yield call(mediasApi.postMediaImage, action.payload);
    yield put(mediasActions.postMediaImageSuccess({ id: action.payload.postId, mediasId: payload.id }));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaImageFailure({ errorCode }));
  }
}

function* postMediaVideoRequestSaga(action) {
  try {
    const { data: payload } = yield call(mediasApi.postMediaVideo, action.payload);
    yield put(mediasActions.postMediaVideoSuccess({ id: action.payload.postId, mediasId: payload.id }));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaVideoFailure({ errorCode }));
  }
}

function* postMediaLocationRequestSaga(action) {
  try {
    const { data: payload } = yield call(mediasApi.postMediaLocation, action.payload);
    yield put(mediasActions.postMediaLocationSuccess({ id: action.payload.postId, mediasId: payload.id }));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaLocationFailure({ errorCode }));
  }
}

const mediasSaga = all([
  takeNormalize(mediasActionsTypes.GET_MEDIA_REQUEST, getMediaRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_AVATAR_USER_REQUEST, postMediaAvatarUserRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_REQUEST, postMediaAvatarGroupRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_TEXT_REQUEST, postMediaTextRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_IMAGE_REQUEST, postMediaImageRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_VIDEO_REQUEST, postMediaVideoRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_LOCATION_REQUEST, postMediaLocationRequestSaga)
]);

export default mediasSaga;
