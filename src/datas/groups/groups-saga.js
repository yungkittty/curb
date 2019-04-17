import { all, takeLatest, takeEvery, select, take, call, put } from "redux-saga/effects";
import appModalActions from "../app-modal/app-modal-actions";
import groupsActionsTypes from "./groups-actions-types";
import groupsActions from "./groups-actions";
import groupsApi from "./groups-api";
import { currentUserSelectors } from "../current-user";

function* getGroupRequestSaga(action) {
  try {
    const { data: payload } = yield call(groupsApi.getGroup, action.payload);
    yield put(groupsActions.getGroupSuccess(payload));
  } catch (error) {
    yield put(groupsActions.getGroupFailure(error));
  }
}

function* postGroupRequestSaga(action) {
  try {
    const { history, avatar, ...others } = action.payload;
    const { data: payload } = yield call(groupsApi.postGroup, others);
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    if (avatar) {
      yield put(
        groupsActions.postGroupAvatarRequest({
          id: payload.id,
          avatar: avatar.file
        })
      );
      yield take("POST_GROUP_AVATAR_SUCCESS");
    }
    yield put(groupsActions.postGroupSuccess({ ...payload, currentUserId }));
    yield put(appModalActions.hideAppModal());
    history.push(`/groups/${payload.id}`);
  } catch (error) {
    yield put(groupsActions.postGroupFailure(error));
  }
}

function* postGroupAvatarRequestSaga(action) {
  try {
    const respond = yield call(groupsApi.postGroupAvatar, action.payload);
    yield put(groupsActions.postGroupAvatarSuccess(respond));
  } catch (error) {
    yield put(groupsActions.postGroupAvatarFailure(error));
  }
}

const groupsSaga = all([
  takeEvery(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga),
  takeLatest(groupsActionsTypes.POST_GROUP_REQUEST, postGroupRequestSaga),
  takeLatest(groupsActionsTypes.POST_GROUP_AVATAR_REQUEST, postGroupAvatarRequestSaga)
]);

export default groupsSaga;
