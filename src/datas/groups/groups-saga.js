import {
  all,
  takeLatest,
  takeEvery,
  select,
  call,
  put
} from "redux-saga/effects";
import { currentUserSelectors } from "../current-user";
import groupsActionsTypes from "./groups-actions-types";
import groupsActions from "./groups-actions";
import groupsApi from "./groups-api";

function* postGroupRequestSaga({ payload }) {
  try {
    const { history, ...others } = payload;
    const token = yield select(currentUserSelectors.getCurrentUserToken);
    const respond = yield call(groupsApi.postGroup, { payload: others, token });
    yield put(groupsActions.postGroupSuccess(respond));
    history.push(`/groups/${respond.data.id}`);
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

const groupsSaga = all([
  takeLatest(groupsActionsTypes.POST_GROUP_REQUEST, postGroupRequestSaga),
  takeEvery(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga)
]);

export default groupsSaga;
