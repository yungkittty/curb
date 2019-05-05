import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import groupsActionsTypes from "./groups-actions-types";
import groupsActions from "./groups-actions";
import groupsApi from "./groups-api";
import appModalActions from "../app-modal/app-modal-actions";
import currentUserSelectors from "../current-user/current-user-selectors";

function* postGroupRequestSaga(action) {
  try {
    const { history, ...others } = action.payload;
    const { data: payload } = yield call(groupsApi.postGroup, others);
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield put(groupsActions.postGroupSuccess({ ...payload, currentUserId }));
    yield put(appModalActions.hideAppModal());
    history.push(`/groups/${payload.id}`);
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.postGroupFailure({ errorCode }));
  }
}

function* getGroupRequestSaga(action) {
  try {
    const { data: payload } = yield call(groupsApi.getGroup, action.payload);
    yield put(groupsActions.getGroupSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.getGroupFailure({ id: action.payload.id, errorCode }));
  }
}

function* postGroupInviteTokenRequestSaga(action) {
  try {
    yield call(groupsApi.postGroupInviteToken, action.payload);
    yield put(groupsActions.postGroupInviteTokenSuccess());
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.postGroupInviteTokenFailure({ errorCode }));
  }
}

function* getGroupInviteTokenRequestSaga(action) {
  try {
    const { data: payload } = yield call(groupsApi.getGroupInviteToken, action.payload);
    yield put(groupsActions.getGroupInviteTokenSuccess({ ...payload, id: action.payload.id }));
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data || {};
    yield put(groupsActions.getGroupInviteTokenFailure({ id: action.payload.id, errorCode }));
  }
}

const groupsSaga = all([
  takeLatest(groupsActionsTypes.POST_GROUP_REQUEST, postGroupRequestSaga),
  takeNormalize(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga),
  takeLatest(groupsActionsTypes.POST_GROUP_INVITE_TOKEN_REQUEST, postGroupInviteTokenRequestSaga),
  takeLatest(groupsActionsTypes.GET_GROUP_INVITE_TOKEN_REQUEST, getGroupInviteTokenRequestSaga)
]);

export default groupsSaga;
