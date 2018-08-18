import { takeLatest, call, put } from "redux-saga";
import * as userApi from "./user-api";
import * as userActionsTypes from "./user-actions-types";
import * as userActions from "./user-actions";

/* ... */

function* userCreateRequestSaga() {
  try {
    yield call(userApi.createUser, null);
    yield put(userActions.createUserSuccess);
  } catch (error) {
    yield put(userActions.createUserFailure);
  }
}

/* ... */

function* userDeleteRequestSaga() {
  try {
    yield call(userApi.deleteUser, null);
    yield put(userActions.deleteUserSuccess);
  } catch (error) {
    yield put(userActions.deleteUserFailure);
  }
}

/* ... */

const userSaga = [
  takeLatest(userActionsTypes.USER_CREATE_REQUEST, userCreateRequestSaga),
  takeLatest(userActionsTypes.USER_DELETE_REQUEST, userDeleteRequestSaga)
];

export default userSaga;
