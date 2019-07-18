import { all, takeLatest, call, put } from "redux-saga/effects";
import discoveryActionsTypes from "./discovery-actions-types";
import discoveryActions from "./discovery-actions";
import discoveryApi from "./discovery-api";

function* getDiscoveryGlobalSectionGroupsRequestSaga(action) {
  try {
    const { data: payload } = yield call(discoveryApi.getDiscoveryGlobalSectionGroups, action.payload);
    yield put(discoveryActions.getDiscoveryGlobalSectionGroupsSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(discoveryActions.getDiscoveryGlobalSectionGroupsFailure({ errorCode }));
  }
}

function* getDiscoveryCustomSectionGroupsRequestSaga(action) {
  try {
    const { data: payload } = yield call(discoveryApi.getDiscoveryCustomSectionGroups, action.payload);
    yield put(discoveryActions.getDiscoveryCustomSectionGroupsSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(discoveryActions.getDiscoveryCustomSectionGroupsFailure({ errorCode }));
  }
}

function* getDiscoveryRandomSectionGroupsRequestSaga(action) {
  try {
    const { data: payload } = yield call(discoveryApi.getDiscoveryRandomSectionGroups, action.payload);
    yield put(discoveryActions.getDiscoveryRandomSectionGroupsSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(discoveryActions.getDiscoveryRandomSectionGroupsFailure({ errorCode }));
  }
}

const discoverySaga = all([
  // eslint-disable-line
  takeLatest(
    discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_REQUEST,
    getDiscoveryGlobalSectionGroupsRequestSaga
  ),
  takeLatest(
    discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_REQUEST,
    getDiscoveryCustomSectionGroupsRequestSaga
  ),
  takeLatest(
    discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_REQUEST,
    getDiscoveryRandomSectionGroupsRequestSaga
  )
]);

export default discoverySaga;
