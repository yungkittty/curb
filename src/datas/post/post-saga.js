import _ from "lodash";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import postActionsTypes from "./post-actions-types";
import postActions from "./post-actions";
import postApi from "./post-api";
import mediasActions from "../medias/medias-actions";

function* getPostRequestSaga(action) {
  try {
    const { data: payload } = yield call(postApi.getPost, action.payload);
    yield put(postActions.getPostSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postActions.getPostFailure({ id: action.payload.id, errorCode }));
  }
}

function* postPostRequestSaga(action) {
  try {
    const { groupId, mediaList } = action.payload;
    const { data: responsePayload } = yield call(postApi.postPost, { groupId });
    if (mediaList.text)
      yield put(
        mediasActions.postMediaTextRequest({ postId: responsePayload.id, data: mediaList.text.value })
      );
    for (let i = 0; mediaList.image && i < _.size(mediaList.image.value); i += 1)
      yield put(
        mediasActions.postMediaImageRequest({
          postId: responsePayload.id,
          data: mediaList.image.value[i]
        })
      );
    if (mediaList.video)
      yield put(
        mediasActions.postMediaVideoRequest({ postId: responsePayload.id, data: mediaList.video.value })
      );
    if (mediaList.location)
      yield put(
        mediasActions.postMediaLocationRequest({ postId: responsePayload.id, data: mediaList.location })
      );
    yield put(postActions.postPostSuccess(responsePayload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postActions.postPostFailure({ id: action.payload.id, errorCode }));
  }
}

const postSaga = all([
  takeNormalize(postActionsTypes.GET_POST_REQUEST, getPostRequestSaga),
  takeLatest(postActionsTypes.POST_POST_REQUEST, postPostRequestSaga)
]);

export default postSaga;
