import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import appModalActions from "../app-modal/app-modal-actions";
import groupsActionsTypes from "./groups-actions-types";
import groupsActions from "./groups-actions";
import groupsApi from "./groups-api";
import { currentUserSelectors } from "../current-user";

function* postGroupRequestSaga(action) {
  try {
    const { history, ...others } = action.payload;
    const { data: payload } = yield call(groupsApi.postGroup, others);
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield put(groupsActions.postGroupSuccess({ ...payload, currentUserId }));
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
    const { code: errorCode = "" } = (error.response || {}).data;
    yield put(groupsActions.getGroupFailure({ id: action.payload.id, errorCode }));
  }
}

const groupsSaga = all([
  takeLatest(groupsActionsTypes.POST_GROUP_REQUEST, postGroupRequestSaga),
  takeNormalize(groupsActionsTypes.GET_GROUP_REQUEST, getGroupRequestSaga)
]);

export default groupsSaga;
