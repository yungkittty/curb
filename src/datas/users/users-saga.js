import { all, takeEvery, call, put } from "redux-saga/effects";
import usersActionsTypes from "./users-actions-types";
import usersActions from "./users-actions";
import usersApi from "./users-api";

function* getUsersRequestSaga(action) {
  try {
    const { data: payload } = yield call(usersApi.getUser, action.payload);
    yield put(usersActions.getUserSuccess(payload));
  } catch (error) {
    const { code: errorCode = "" } = (error.response || {}).data;
    yield put(usersActions.getUserFailure({ id: action.payload.id, errorCode }));
  }
}

const usersSaga = all([takeEvery(usersActionsTypes.GET_USER_REQUEST, getUsersRequestSaga)]);

export default usersSaga;
