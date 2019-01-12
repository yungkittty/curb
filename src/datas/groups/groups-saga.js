import { all, takeEvery, call, put } from "redux-saga/effects";
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

function* getGroupsRequestSaga(action) {
  try {
    const { data: payload } = yield call(groupsApi.getGroups, action.payload);
    yield put(groupsActions.getGroupsSuccess(payload));
  } catch (error) {
    yield put(groupsActions.getGroupsFailure(error));
  }
}

const groupsSaga = all([
  takeEvery(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga),
  takeEvery(groupsActionsTypes.GET_GROUPS_REQUEST, getGroupsRequestSaga)
]);

export default groupsSaga;
