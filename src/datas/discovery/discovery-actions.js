import discoveryActionsTypes from "./discovery-actions-types";

const discoveryActions = {
  getDiscoveryGlobalSectionGroupsRequest: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_REQUEST,
    payload
  }),
  getDiscoveryGlobalSectionGroupsSuccess: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_SUCCESS,
    payload
  }),
  getDiscoveryGlobalSectionGroupsFailure: error => ({
    type: discoveryActionsTypes.GET_DISCOVERY_GLOBAL_SECTION_GROUPS_FAILURE,
    payload: error,
    error: true
  }),
  getDiscoveryCustomSectionGroupsRequest: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_REQUEST,
    payload
  }),
  getDiscoveryCustomSectionGroupsSuccess: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_SUCCESS,
    payload
  }),
  getDiscoveryCustomSectionGroupsFailure: error => ({
    type: discoveryActionsTypes.GET_DISCOVERY_CUSTOM_SECTION_GROUPS_FAILURE,
    payload: error,
    error: true
  }),
  getDiscoveryRandomSectionGroupsRequest: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_REQUEST,
    payload
  }),
  getDiscoveryRandomSectionGroupsSuccess: payload => ({
    type: discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_SUCCESS,
    payload
  }),
  getDiscoveryRandomSectionGroupsFailure: error => ({
    type: discoveryActionsTypes.GET_DISCOVERY_RANDOM_SECTION_GROUPS_FAILURE,
    payload: error,
    error: true
  })
};

export default discoveryActions;
