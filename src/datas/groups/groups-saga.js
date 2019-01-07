import { all, takeEvery, call, put, takeLatest } from "redux-saga/effects";
import groupsActionsTypes from "./groups-actions-types";
import groupsActions from "./groups-actions";
import groupsApi from "./groups-api";

function* getGroupRequestSaga({ payload }) {
  try {
    const respond = yield call(groupsApi.getGroup, payload);
    yield put(groupsActions.getGroupSuccess(respond));
  } catch (error) {
    yield put(groupsActions.getGroupFailure(error));
  }
}

function* postGroupRequestSaga({ payload }) {
  try {
    const respond = yield call(groupsApi.postGroup, payload);
    yield put(groupsActions.postGroupSuccess(respond));
  } catch (error) {
    yield put(groupsActions.postGroupSuccess(error));
  }
}

const groupsSaga = all([
  takeEvery(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga),
  takeLatest(groupsActionsTypes.POST_GROUP_REQUEST, postGroupRequestSaga)
]);

export default groupsSaga;
