import discoveryActionsTypes from "./discovery-actions-types";

const discoveryActions = {
  getDiscoveryGlobalSectionGroupsIdRequest: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_REQUEST,
    payload
  }),
  getDiscoveryGlobalSectionGroupsIdSuccess: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_SUCCESS,
    payload
  }),
  getDiscoveryGlobalSectionGroupsIdFailure: error => ({
    type: discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_ID_FAILURE,
    payload: error,
    error: true
  }),
  getDiscoveryCustomSectionGroupsIdRequest: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_REQUEST,
    payload
  }),
  getDiscoveryCustomSectionGroupsIdSuccess: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_SUCCESS,
    payload
  }),
  getDiscoveryCustomSectionGroupsIdFailure: error => ({
    type: discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_ID_FAILURE,
    payload: error,
    error: true
  }),
  getDiscoveryRandomSectionGroupsIdRequest: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_REQUEST,
    payload
  }),
  getDiscoveryRandomSectionGroupsIdSuccess: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_SUCCESS,
    payload
  }),
  getDiscoveryRandomSectionGroupsIdFailure: error => ({
    type: discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_ID_FAILURE,
    payload: error,
    error: true
  })
};

export default discoveryActions;
