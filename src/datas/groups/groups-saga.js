import { all, takeLatest, takeEvery, select, call, put } from "redux-saga/effects";
import appModalActions from "../app-modal/app-modal-actions";
import mediasActions from "../medias/medias-actions";
import groupsActionsTypes from "./groups-actions-types";
import groupsActions from "./groups-actions";
import groupsApi from "./groups-api";
import { currentUserSelectors } from "../current-user";
import appAlertActions from "../app-alert/app-alert-actions";

function* postGroupRequestSaga(action) {
  try {
    const { history, avatar, ...others } = action.payload;
    const { data: payload } = yield call(groupsApi.postGroup, others);
    if (avatar) yield put(mediasActions.postMediaAvatarGroupRequest({ id: payload.id, avatar }));
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield put(groupsActions.postGroupSuccess({ ...payload, currentUserId }));
    yield put(appAlertActions.pushAppAlert({ type: "success", message: "groupCreated", icon: "check" }));
    yield put(appModalActions.hideAppModal());
    history.push(`/groups/${payload.id}`);
  } catch (error) {
    yield put(groupsActions.postGroupFailure(error));
  }
}

function* getGroupRequestSaga(action) {
  try {
    const { data: payload } = yield call(groupsApi.getGroup, action.payload);
    yield put(groupsActions.getGroupSuccess(payload));
  } catch (error) {
    yield put(groupsActions.getGroupFailure(error));
  }
}

function* getGroupInviteTokenRequestSaga(action) {
  try {
    const { data: payload } = yield call(groupsApi.getGroupInviteToken, action.payload);
    yield put(groupsActions.getGroupInviteTokenSuccess({ ...payload, id: action.payload.id }));
  } catch (error) {
    yield put(groupsActions.getGroupInviteTokenFailure(error));
  }
}

const groupsSaga = all([
  takeLatest(groupsActionsTypes.POST_GROUP_REQUEST, postGroupRequestSaga),
  takeEvery(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga),
  takeLatest(groupsActionsTypes.GET_GROUP_INVITE_TOKEN_REQUEST, getGroupInviteTokenRequestSaga)
]);

export default groupsSaga;
