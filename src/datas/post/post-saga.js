import _ from "lodash";
import { all, fork, join, select, takeLatest, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import postActionsTypes from "./post-actions-types";
import postActions from "./post-actions";
import postApi from "./post-api";
import postSelectors from "./post-selectors";
import appAlertActions from "../app-alert/app-alert-actions";
import {
  postMediaTextRequestSaga,
  postMediaImageRequestSaga,
  postMediaVideoRequestSaga,
  postMediaLocationRequestSaga
} from "../medias/medias-saga";

function* getPostRequestSaga(action) {
  try {
    const { data: payload } = yield call(postApi.getPost, action.payload);
    yield put(postActions.getPostSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postActions.getPostFailure({ id: action.payload.id, errorCode }));
  }
}

function* postPinPostRequestSaga(action) {
  try {
    yield call(postApi.postPinPost, action.payload);
    yield put(postActions.postPinPostSuccess());
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postActions.getPostFailure({ id: action.payload.id, errorCode }));
  }
}

function* postReportPostRequestSaga(action) {
  try {
    yield call(postApi.postReportPost, action.payload);
    yield put(postActions.postReportPostSuccess());
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postActions.getPostFailure({ id: action.payload.id, errorCode }));
  }
}

function* deletePostRequestSaga(action) {
  try {
    const { id } = action.payload;
    const { groupId } = yield select(postSelectors.getPostById, id);
    yield call(postApi.deletePost, { id });
    const successAlert = { type: "success", message: "postDeleted", icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
    yield put(postActions.deletePostSuccess({ postId: id, groupId }));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postActions.getPostFailure({ id: action.payload.id, errorCode }));
  }
}

function* postLikePostRequestSaga(action) {
  try {
    yield call(postApi.postLikePost, action.payload);
    yield put(postActions.postLikePostSuccess());
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postActions.getPostFailure({ id: action.payload.id, errorCode }));
  }
}

function* postMediasRequestSaga(payload) {
  try {
    const { postId, mediaList } = payload;
    const mediaActionsToWait = [];
    if (mediaList.text) {
      mediaActionsToWait.push(yield fork(postMediaTextRequestSaga, { postId, data: mediaList.text.value }));
    }
    for (let i = 0; mediaList.image && i < _.size(mediaList.image.value); i += 1) {
      mediaActionsToWait.push(
        yield fork(postMediaImageRequestSaga, {
          postId,
          data: mediaList.image.value[i]
        })
      );
    }
    if (mediaList.video) {
      mediaActionsToWait.push(yield fork(postMediaVideoRequestSaga, { postId, data: mediaList.video.value }));
    }
    if (mediaList.location) {
      mediaActionsToWait.push(
        yield fork(postMediaLocationRequestSaga, { postId, data: mediaList.location.value })
      );
    }
    for (let i = 0; i < mediaActionsToWait.length; i += 1) yield join(mediaActionsToWait[i]);
    yield put(postActions.postMediasSuccess({ postId }));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postActions.postMediasFailure({ id: payload.id, errorCode }));
  }
}

function* postPostRequestSaga(action) {
  try {
    const { groupId, mediaList } = action.payload;
    const {
      data: { id: postId }
    } = yield call(postApi.postPost, { groupId });
    yield call(postMediasRequestSaga, { postId, mediaList });
    const successAlert = { type: "success", message: "postPosted", icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
    yield put(postActions.postPostSuccess({ groupId, postId }));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    const errorAlert = { type: "error", message: "postError", icon: "times" };
    yield put(appAlertActions.pushAppAlert(errorAlert));
    yield put(postActions.postPostFailure({ id: action.payload.id, errorCode }));
  }
}

const postSaga = all([
  takeNormalize(postActionsTypes.GET_POST_REQUEST, getPostRequestSaga),
  takeLatest(postActionsTypes.POST_PIN_POST_REQUEST, postPinPostRequestSaga),
  takeLatest(postActionsTypes.POST_REPORT_POST_REQUEST, postReportPostRequestSaga),
  takeLatest(postActionsTypes.DELETE_POST_REQUEST, deletePostRequestSaga),
  takeLatest(postActionsTypes.POST_LIKE_POST_REQUEST, postLikePostRequestSaga),
  takeLatest(postActionsTypes.POST_POST_REQUEST, postPostRequestSaga),
  takeLatest(postActionsTypes.POST_MEDIAS_REQUEST, postMediasRequestSaga)
]);

export default postSaga;
