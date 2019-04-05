import usersActionsTypes from "./users-actions-types";

const usersActions = {
  getUserRequest: payload => ({
    type: usersActionsTypes.GET_USER_REQUEST,
    payload
  }),
  getUserSuccess: payload => ({
    type: usersActionsTypes.GET_USER_SUCCESS,
    payload
  }),
  getUserFailure: error => ({
    type: usersActionsTypes.GET_USER_FAILURE,
    payload: error,
    error: true
  })
};

export default usersActions;
