import { all, takeLatest, takeEvery, call, put } from "redux-saga/effects";
import groupsActionsTypes from "./groups-actions-types";
import groupsActions from "./groups-actions";
import groupsApi from "./groups-api";

function* postGroupRequestSaga({ payload }) {
  try {
    const respond = yield call(groupsApi.postGroup, payload);
    yield put(groupsActions.postGroupSuccess(respond));
  } catch (error) {
    yield put(groupsActions.postGroupSuccess(error));
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

const groupsSaga = all([
  takeLatest(groupsActionsTypes.POST_GROUP_REQUEST, postGroupRequestSaga),
  takeEvery(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga)
]);

export default groupsSaga;
