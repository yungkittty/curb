import { all, takeLatest, call, put } from "redux-saga/effects";
import discoveryActionsTypes from "./discovery-actions-types";
import discoveryActions from "./discovery-actions";
import discoveryApi from "./discovery-api";

function* getDiscoveryGlobalSectionGroupsIdRequestSaga(action) {
  try {
    const { data: payload } = yield call(discoveryApi.getDiscoveryGlobalSectionGroupsId, action.payload);
    yield put(discoveryActions.getDiscoveryGlobalSectionGroupsIdSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(discoveryActions.getDiscoveryGlobalSectionGroupsIdFailure({ errorCode }));
  }
}

function* getDiscoveryCustomSectionGroupsIdRequestSaga(action) {
  try {
    const { data: payload } = yield call(discoveryApi.getDiscoveryCustomSectionGroupsId, action.payload);
    yield put(discoveryActions.getDiscoveryCustomSectionGroupsIdSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(discoveryActions.getDiscoveryCustomSectionGroupsIdFailure({ errorCode }));
  }
}

function* getDiscoveryRandomSectionGroupsIdRequestSaga(action) {
  try {
    const { data: payload } = yield call(discoveryApi.getDiscoveryRandomSectionGroupsId, action.payload);
    yield put(discoveryActions.getDiscoveryRandomSectionGroupsIdSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(discoveryActions.getDiscoveryRandomSectionGroupsIdFailure({ errorCode }));
  }
}

const discoverySaga = all([
  // eslint-disable-line
  takeLatest(
    discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_REQUEST,
    getDiscoveryGlobalSectionGroupsIdRequestSaga
  ),
  takeLatest(
    discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_REQUEST,
    getDiscoveryCustomSectionGroupsIdRequestSaga
  ),
  takeLatest(
    discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_REQUEST,
    getDiscoveryRandomSectionGroupsIdRequestSaga
  )
]);

export default discoverySaga;
