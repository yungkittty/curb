import { all, takeLatest, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import mediasActionsTypes from "./medias-actions-types";
import mediasActions from "./medias-actions";
import mediasApi from "./medias-api";
import appAlertActions from "../app-alert/app-alert-actions";
import appModalActions from "../app-modal/app-modal-actions";

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
    const { id, avatar, onSuccessAlert } = action.payload;
    yield call(mediasApi.postMediaAvatarUser, action.payload);
    yield put(mediasActions.postMediaAvatarUserSuccess({ id, avatar }));
    if (onSuccessAlert) yield put(appAlertActions.pushAppAlert(onSuccessAlert));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    const errorAlert = { type: "error", message: `postAvatar.${errorCode}`, icon: "times" };
    yield put(mediasActions.postMediaAvatarUserFailure({ id: action.payload.id, errorCode }));
    yield put(appAlertActions.pushAppAlert(errorAlert));
  }
}

function* postMediaAvatarGroupRequestSaga(action) {
  try {
    const { id, avatar, onSuccessAlert } = action.payload;
    yield call(mediasApi.postMediaAvatarGroup, action.payload);
    yield put(mediasActions.postMediaAvatarGroupSuccess({ id, avatar }));
    if (onSuccessAlert) yield put(appAlertActions.pushAppAlert(onSuccessAlert));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    const errorAlert = { type: "error", message: `postAvatar.${errorCode}`, icon: "times" };
    yield put(mediasActions.postMediaAvatarGroupFailure({ id: action.payload.id, errorCode }));
    yield put(appAlertActions.pushAppAlert(errorAlert));
  }
}

function* postMediaImageRequestSaga(action) {
  try {
    const { data: payload } = yield call(mediasApi.postMediaImage, action.payload);
    yield put(mediasActions.postMediaImageSuccess({ id: action.payload.groupId, mediasId: payload.id }));
    yield put(appModalActions.hideAppModal());
    yield put(
      appAlertActions.pushAppAlert({ type: "success", message: "createMedia.imagePosted", icon: "check" })
    );
  } catch (error) {
    const { groupId } = action.payload;
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaImageFailure({ id: groupId, errorCode }));
  }
}

const mediasSaga = all([
  takeNormalize(mediasActionsTypes.GET_MEDIA_REQUEST, getMediaRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_AVATAR_USER_REQUEST, postMediaAvatarUserRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_AVATAR_GROUP_REQUEST, postMediaAvatarGroupRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_IMAGE_REQUEST, postMediaImageRequestSaga)
]);

export default mediasSaga;
