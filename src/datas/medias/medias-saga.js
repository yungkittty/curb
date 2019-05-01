import { all, takeLatest, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import mediasActionsTypes from "./medias-actions-types";
import mediasActions from "./medias-actions";
import mediasApi from "./medias-api";
import usersActions from "../users/users-actions";
import groupsActions from "../groups/groups-actions";
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

function* postMediaAvatarRequestSaga(action) {
  const { target, id, onSuccessAlert } = action.payload;
  try {
    const respond = yield call(mediasApi.postMediaAvatar, action.payload);
    yield put(mediasActions.postMediaAvatarSuccess(respond));
    if (onSuccessAlert) yield put(appAlertActions.pushAppAlert(onSuccessAlert));
    yield put(
      target === "users" ? usersActions.getUserRequest({ id }) : groupsActions.getGroupRequest({ id })
    );
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(mediasActions.postMediaAvatarFailure({ id, errorCode }));
    yield put(
      appAlertActions.pushAppAlert({
        type: "error",
        message: `postAvatar.${errorCode}`,
        icon: "times"
      })
    );
  }
}

const mediasSaga = all([
  takeNormalize(mediasActionsTypes.GET_MEDIA_REQUEST, getMediaRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_AVATAR_REQUEST, postMediaAvatarRequestSaga)
]);

export default mediasSaga;
