import { all, takeLatest, takeEvery, select, take, call, put } from "redux-saga/effects";
import appModalActions from "../app-modal/app-modal-actions";
import mediasActions from "../medias/medias-actions";
import mediasActionsTypes from "../medias/medias-actions-types";
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
    if (avatar) {
      yield put(
        mediasActions.postMediaAvatarRequest({
          target: "groups",
          id: payload.id,
          avatar
        })
      );
      yield take(mediasActionsTypes.POST_MEDIA_AVATAR_SUCCESS);
    }
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield put(groupsActions.postGroupSuccess({ ...payload, currentUserId }));
    yield put(appModalActions.hideAppModal());
    history.push(`/groups/${payload.id}`);
  } catch (error) {
    yield put(groupsActions.postGroupFailure(error));
  }
}

const groupsSaga = all([
  takeEvery(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga),
  takeLatest(groupsActionsTypes.POST_GROUP_REQUEST, postGroupRequestSaga)
]);

export default groupsSaga;
