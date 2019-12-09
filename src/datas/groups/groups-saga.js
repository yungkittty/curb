import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import groupsActionsTypes from "./groups-actions-types";
import groupsActions from "./groups-actions";
import groupsApi from "./groups-api";
import appModalActions from "../app-modal/app-modal-actions";
import appAlertActions from "../app-alert/app-alert-actions";
import currentUserSelectors from "../current-user/current-user-selectors";
import mediasActions from "../medias/medias-actions";
import { postActions } from "../post";

function* postGroupRequestSaga(action) {
  try {
    const { history, avatar = {}, ...others } = action.payload;
    const { data: payload } = yield call(groupsApi.postGroup, others);
    if (avatar.file) yield put(mediasActions.postMediaAvatarGroupRequest({ id: payload.id, avatar }));
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield put(groupsActions.postGroupSuccess({ ...payload, currentUserId }));
    const successAlert = { type: "success", message: "groupCreated", icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
    yield put(appModalActions.hideAppModal());
    history.push(`/groups/${payload.id}`);
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.postGroupFailure({ errorCode }));
  }
}

function* getGroupRequestSaga(action) {
  try {
    const { data: payload } = yield call(groupsApi.getGroup, action.payload);
    if (action.payload.fetchPostList) yield put(postActions.getPostListRequest({ groupId: payload.id }));
    yield put(groupsActions.getGroupSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.getGroupFailure({ id: action.payload.id, errorCode }));
  }
}

function* patchGroupRequestSaga(action) {
  try {
    const { id, avatar = {}, ...others } = action.payload;
    yield call(groupsApi.patchGroup, { ...others, id });
    if (avatar.file) yield put(mediasActions.postMediaAvatarGroupRequest({ id, avatar }));
    yield put(groupsActions.patchGroupSuccess({ ...others, id }));
    const successAlert = { type: "success", message: "groupPatched", icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.patchGroupFailure({ errorCode }));
  }
}

function* deleteGroupRequestSaga(action) {
  try {
    const { history, ...others } = action.payload;
    yield call(groupsApi.deleteGroup, others);
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield put(groupsActions.deleteGroupSuccess({ ...others, currentUserId }));
    const successAlert = { type: "success", message: "groupDeleted", icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
    yield put(appModalActions.hideAppModal());
    history.push(`/`);
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.deleteGroupFailure({ errorCode }));
  }
}

function* getGroupsRequestSaga(action) {
  try {
    const { data: payload } = yield call(groupsApi.getGroups, action.payload);
    yield put(groupsActions.getGroupsSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.getGroupsFailure({ ids: action.payload.ids, errorCode }));
  }
}

function* postGroupJoinRequestSaga(action) {
  try {
    yield call(groupsApi.postGroupJoin, action.payload);
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield put(groupsActions.postGroupJoinSuccess({ ...action.payload, currentUserId }));
    const successAlert = { type: "success", message: "postGroupJoin.groupJoinSuccess", icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.postGroupJoinFailure({ errorCode }));
    const errorAlert = { type: "error", message: `postGroupJoin.UNKNOWN`, icon: "times" };
    yield put(appAlertActions.pushAppAlert(errorAlert));
  }
}

function* postGroupUnjoinRequestSaga(action) {
  try {
    yield call(groupsApi.postGroupUnjoin, action.payload);
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield put(groupsActions.postGroupUnjoinSuccess({ ...action.payload, currentUserId }));
    const successAlert = { type: "success", message: "postGroupUnjoin.groupUnjoinSuccess", icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.postGroupUnjoinFailure({ errorCode }));
    const errorAlert = { type: "error", message: `postGroupUnjoin.UNKNOWN`, icon: "times" };
    yield put(appAlertActions.pushAppAlert(errorAlert));
  }
}

function* getGroupInviteTokenRequestSaga(action) {
  try {
    const { data: payload } = yield call(groupsApi.getGroupInviteToken, action.payload);
    yield put(groupsActions.getGroupInviteTokenSuccess({ ...payload, id: action.payload.id }));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.getGroupInviteTokenFailure({ id: action.payload.id, errorCode }));
  }
}

const groupsSaga = all([
  takeLatest(groupsActionsTypes.POST_GROUP_REQUEST, postGroupRequestSaga),
  takeNormalize(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga),
  takeLatest(groupsActionsTypes.PATCH_GROUP_REQUEST, patchGroupRequestSaga),
  takeLatest(groupsActionsTypes.DELETE_GROUP_REQUEST, deleteGroupRequestSaga),
  takeNormalize(groupsActionsTypes.GET_GROUPS_REQUEST, getGroupsRequestSaga),
  takeLatest(groupsActionsTypes.POST_GROUP_JOIN_REQUEST, postGroupJoinRequestSaga),
  takeLatest(groupsActionsTypes.POST_GROUP_UNJOIN_REQUEST, postGroupUnjoinRequestSaga),
  takeLatest(groupsActionsTypes.GET_GROUP_INVITE_TOKEN_REQUEST, getGroupInviteTokenRequestSaga)
]);

export default groupsSaga;
