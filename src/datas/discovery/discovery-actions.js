import discoveryActionsTypes from "./discovery-actions-types";

const discoveryActions = {
  getDiscoveryRequest: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_REQUEST,
    payload
  }),
  getDiscoverySuccess: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_SUCCESS,
    payload
  }),
  getDiscoveryFailure: error => ({
    type: discoveryActionsTypes.GET_DISCOVERY_FAILURE,
    payload: error,
    error: true
  })
};

export default discoveryActions;
