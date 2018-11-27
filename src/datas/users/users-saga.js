import { all, takeEvery, call, put } from "redux-saga/effects";
import usersActionsTypes from "./users-actions-types";
import usersActions from "./users-actions";
import usersApi from "./users-api";

function* getUsersRequestSaga({ payload }) {
  try {
    const respond = yield call(usersApi.getUser, payload);
    yield put(usersActions.getUserSuccess(respond));
  } catch (error) {
    yield put(usersActions.getUserFailure(error));
  }
}

const usersSaga = all([
  takeEvery(usersActionsTypes.GET_USER_REQUEST, getUsersRequestSaga)
]);

export default usersSaga;
