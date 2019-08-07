import discoveryActionsTypes from "./discovery-actions-types";

const discoveryActions = {
  getDiscoverySectionsRequest: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_SECTIONS_REQUEST,
    payload
  }),
  getDiscoverySectionsSuccess: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_SECTIONS_SUCCESS,
    payload
  }),
  getDiscoverySectionsFailure: error => ({
    type: discoveryActionsTypes.GET_DISCOVERY_SECTIONS_FAILURE,
    payload: error,
    error: true
  })
};

export default discoveryActions;
