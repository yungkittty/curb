import { all, takeEvery, takeLatest, select, call, put } from "redux-saga/effects";
import TestFairy from "react-native-testfairy";
import mediasActionsTypes from "./medias-actions-types";
import mediasActions from "./medias-actions";
import mediasApi from "./medias-api";
import { currentUserSelectors } from "../current-user";

function* getMediaRequestSaga(action) {
  try {
    const { data: payload } = yield call(mediasApi.getMedia, action.payload);
    yield put(mediasActions.getMediaSuccess(payload));
  } catch (error) {
    const { code: errorCode = "" } = (error.response || {}).data;
    yield put(mediasActions.getMediaFailure({ id: action.payload.id, errorCode }));
  }
}

function* postMediaUserAvatarRequestSaga(action) {
  try {
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    const respond = yield call(mediasApi.postMediaUserAvatar, { id: currentUserId, payload: action.payload });
    yield put(mediasActions.postMediaUserAvatarSuccess(respond));
  } catch (error) {
    TestFairy.log(error);
    yield put(mediasActions.postMediaUserAvatarFailure(error));
  }
}

const mediasSaga = all([
  takeEvery(mediasActionsTypes.GET_MEDIA_REQUEST, getMediaRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_USER_AVATAR_REQUEST, postMediaUserAvatarRequestSaga)
]);

export default mediasSaga;
