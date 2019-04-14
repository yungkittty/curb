import { all, takeEvery, takeLatest, call, put } from "redux-saga/effects";
import groupsActionsTypes from "./groups-actions-types";
import groupsActions from "./groups-actions";
import groupsApi from "./groups-api";

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
    console.log({ id: action.payload.id });
    const { data: payload } = yield call(groupsApi.getGroupInviteToken, action.payload);
    yield put(groupsActions.getGroupInviteTokenSuccess({ ...payload, id: action.payload.id }));
  } catch (error) {
    console.log({ error });
    yield put(groupsActions.getGroupInviteTokenFailure(error));
  }
}

const groupsSaga = all([
  takeEvery(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga),
  takeLatest(groupsActionsTypes.GET_GROUP_TOKEN_REQUEST, getGroupInviteTokenRequestSaga)
]);

export default groupsSaga;
