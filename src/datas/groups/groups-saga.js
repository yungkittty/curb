import { all, takeEvery, call, put } from "redux-saga/effects";
import groupsActionsTypes from "./groups-actions-types";
import groupsActions from "./groups-actions";
import groupsApi from "./groups-api";

function* getGroupRequestSaga(action) {
  try {
    const { data: payload } = yield call(groupsApi.getGroup, action.payload);
    yield put(groupsActions.getGroupSuccess(payload));
  } catch (error) {
    const { code: errorCode = "" } = (error.response || {}).data;
    yield put(groupsActions.getGroupFailure({ id: action.payload.id, errorCode }));
  }
}

const groupsSaga = all([takeEvery(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga)]);

export default groupsSaga;
