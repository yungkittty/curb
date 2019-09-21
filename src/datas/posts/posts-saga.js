import { all, takeLatest, call, put } from "redux-saga/effects";
import postsActionsTypes from "./posts-actions-types";
import postsActions from "./posts-actions";
import postsApi from "./posts-api";

function* getPostsRequest(action) {
  try {
    const { data: payload } = yield call(postsApi.getPosts, action.payload);
    yield put(postsActions.getPostsSuccess({ ...payload, groupId: action.payload.groupId }));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(postsActions.getPostsFailure({ errorCode, groupId: action.payload.groupId }));
  }
}

const postsSaga = all([
  // eslint-disable-line
  takeLatest(postsActionsTypes.GET_POSTS_REQUEST, getPostsRequest)
]);

export default postsSaga;
