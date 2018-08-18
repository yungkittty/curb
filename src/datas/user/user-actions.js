import * as userActionsTypes from "./user-actions-types";

const createUserRequest = () => ({
  type: userActionsTypes.USER_CREATE_REQUEST
});

const createUserSuccess = () => ({
  type: userActionsTypes.USER_CREATE_SUCCESS
});

const createUserFailure = () => ({
  type: userActionsTypes.USER_CREATE_FAILURE
});

const deleteUserRequest = () => ({
  type: userActionsTypes.USER_DELETE_REQUEST
});

const deleteUserSuccess = () => ({
  type: userActionsTypes.USER_DELETE_SUCCESS
});

const deleteUserFailure = () => ({
  type: userActionsTypes.USER_DELETE_FAILURE
});

export {
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure
};
