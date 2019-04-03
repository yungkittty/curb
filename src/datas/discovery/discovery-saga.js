import { all, takeEvery, call, put } from "redux-saga/effects";
import discoveryActionsTypes from "./discovery-actions-types";
import discoveryActions from "./discovery-actions";
import discoveryApi from "./discovery-api";

function* getDiscoveryRequestSaga(action) {
  try {
    const { data: payload } = yield call(discoveryApi.getDiscovery, action.payload);
    yield put(discoveryActions.getDiscoverySuccess(payload));
  } catch (error) {
    yield put(discoveryActions.getDiscoveryFailure(error));
  }
}

const discoverySaga = all([
  takeEvery(discoveryActionsTypes.GET_DISCOVERY_REQUEST, getDiscoveryRequestSaga)
]);

export default discoverySaga;
