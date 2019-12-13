import _ from "lodash";
import { all, fork, join, select, takeLatest, call, put, takeEvery } from "redux-saga/effects";
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
  postMediaLocationRequestSaga,
  postMediaPollRequestSaga,
  postMediaEventRequestSaga
} from "../medias/medias-saga";
import mediasActionsTypes from "../medias/medias-actions-types";
import mediasApi from "../medias/medias-api";

function* getPostListRequestSaga(action) {
  try {
    const { groupId } = action.payload;
    const { data: pinnedPayload } = yield call(postApi.getPostList, { groupId, pinned: true });
    const { data: unpinnedPayload } = yield call(postApi.getPostList, { groupId, pinned: false });
    yield put(
      postActions.getPostListSuccess({
        groupId,
        filterdPosts: _.concat(pinnedPayload.data, unpinnedPayload.data)
      })
    );
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postActions.getPostListFailure({ id: action.payload.id, errorCode }));
  }
}

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
    const { id, isPinned } = action.payload;
    const { groupId } = yield select(postSelectors.getPostById, id);
    yield call(postApi.postPinPost, { id });
    const successAlert = {
      type: "success",
      message: isPinned ? "postUnpinned" : "postPinned",
      icon: "check"
    };
    yield put(appAlertActions.pushAppAlert(successAlert));
    yield put(postActions.postPinPostSuccess({ id, groupId, isPinned }));
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
    yield put(postActions.deletePostSuccess({ id, groupId }));
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
    const { postId, mediaListData } = payload;
    const mediaActionsToWait = [];
    if (mediaListData.text) {
      mediaActionsToWait.push(yield fork(postMediaTextRequestSaga, { postId, data: mediaListData.text }));
    }
    for (let i = 0; mediaListData.image && i < _.size(mediaListData.image); i += 1) {
      mediaActionsToWait.push(
        yield fork(postMediaImageRequestSaga, {
          postId,
          data: mediaListData.image[i]
        })
      );
    }
    if (mediaListData.video) {
      mediaActionsToWait.push(yield fork(postMediaVideoRequestSaga, { postId, data: mediaListData.video }));
    }
    if (mediaListData.location) {
      mediaActionsToWait.push(yield fork(postMediaLocationRequestSaga, { postId, data: mediaListData.location }));
    }
    if (mediaListData.poll) {
      mediaActionsToWait.push(yield fork(postMediaPollRequestSaga, { postId, data: mediaListData.poll }));
    }
    if (mediaListData.event)
      mediaActionsToWait.push(yield fork(postMediaEventRequestSaga, { postId, data: mediaListData.event }));
    for (let i = 0; i < mediaActionsToWait.length; i += 1) yield join(mediaActionsToWait[i]);
    yield put(postActions.postMediasSuccess({ postId }));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postActions.postMediasFailure({ id: payload.id, errorCode }));
  }
}

function* postPostRequestSaga(action) {
  try {
    const { groupId, mediaListData } = action.payload;
    const {
      data: { id: postId }
    } = yield call(postApi.postPost, { groupId });
    yield call(postMediasRequestSaga, { postId, mediaListData });
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

function* postMediaEventJoinRequestSaga(action) {
  try {
    const { contentId } = action.payload;
    yield call(mediasApi.postMediaEventJoin, { contentId });
  } catch (error) {}
}

const postSaga = all([
  takeLatest(postActionsTypes.GET_POST_LIST_REQUEST, getPostListRequestSaga),
  takeNormalize(postActionsTypes.GET_POST_REQUEST, getPostRequestSaga),
  takeLatest(postActionsTypes.POST_PIN_POST_REQUEST, postPinPostRequestSaga),
  takeLatest(postActionsTypes.POST_REPORT_POST_REQUEST, postReportPostRequestSaga),
  takeEvery(postActionsTypes.DELETE_POST_REQUEST, deletePostRequestSaga),
  takeLatest(postActionsTypes.POST_LIKE_POST_REQUEST, postLikePostRequestSaga),
  takeLatest(postActionsTypes.POST_POST_REQUEST, postPostRequestSaga),
  takeLatest(postActionsTypes.POST_MEDIAS_REQUEST, postMediasRequestSaga),
  takeLatest(mediasActionsTypes.POST_MEDIA_EVENT_JOIN_REQUEST, postMediaEventJoinRequestSaga)
]);

export default postSaga;
