import groupsActionsTypes from "./groups-actions-types";

const groupsActions = {
  getGroupRequest: payload => ({
    type: groupsActionsTypes.GET_GROUP_REQUEST,
    payload
  }),
  getGroupSuccess: payload => ({
    type: groupsActionsTypes.GET_GROUP_SUCCESS,
    payload
  }),
  getGroupFailure: error => ({
    type: groupsActionsTypes.GET_GROUP_FAILURE,
    payload: error,
    error: true
  }),
  getGroupsRequest: payload => ({
    type: groupsActionsTypes.GET_GROUPS_REQUEST,
    payload
  }),
  getGroupsSuccess: payload => ({
    type: groupsActionsTypes.GET_GROUPS_SUCCESS,
    payload
  }),
  getGroupsFailure: error => ({
    type: groupsActionsTypes.GET_GROUPS_FAILURE,
    payload: error,
    error: true
  })
};

export default groupsActions;
