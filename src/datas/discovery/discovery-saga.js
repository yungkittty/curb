import { all, takeLatest, call, put } from "redux-saga/effects";
import discoveryActionsTypes from "./discovery-actions-types";
import discoveryActions from "./discovery-actions";
import discoveryApi from "./discovery-api";

function* getDiscoverySectionsRequestSaga(action) {
  try {
    const { data: payload } = yield call(discoveryApi.getDiscoverySections, action.payload);
    yield put(discoveryActions.getDiscoverySectionsSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(discoveryActions.getDiscoverySectionsFailure({ errorCode }));
  }
}

const discoverySaga = all([
  // eslint-disable-line
  takeLatest(discoveryActionsTypes.GET_DISCOVERY_SECTIONS_REQUEST, getDiscoverySectionsRequestSaga)
]);

export default discoverySaga;
