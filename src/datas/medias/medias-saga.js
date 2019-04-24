import { all, takeEvery, takeLatest, call, put } from "redux-saga/effects";
import mediasActionsTypes from "./medias-actions-types";
import mediasActions from "./medias-actions";
import mediasApi from "./medias-api";
import usersActions from "../users/users-actions";
import groupsActions from "../groups/groups-actions";

function* getMediaRequestSaga(action) {
  try {
    const { data: payload } = yield call(mediasApi.getMedia, action.payload);
    yield put(mediasActions.getMediaSuccess(payload));
  } catch (error) {
    const { code: errorCode = "" } = (error.response || {}).data;
    yield put(mediasActions.getMediaFailure({ id: action.payload.id, errorCode }));
  }
}

function* postMediaAvatarRequestSaga(action) {
  try {
    const { target, id } = action.payload;
    const respond = yield call(mediasApi.postMediaAvatar, action.payload);
    yield put(mediasActions.postMediaAvatarSuccess(respond));
    yield put(
      target === "user" ? usersActions.getUserRequest({ id }) : groupsActions.getGroupRequest({ id })
    );
  } catch (error) {
    yield put(mediasActions.postMediaAvatarFailure(error));
  }
}

const mediasSaga = all([
  takeEvery(mediasActionsTypes.GET_MEDIA_REQUEST, getMediaRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_AVATAR_REQUEST, postMediaAvatarRequestSaga)
]);

export default mediasSaga;
