import { all, takeEvery, takeLatest, call, put } from "redux-saga/effects";
import usersActionsTypes from "./users-actions-types";
import usersActions from "./users-actions";
import usersApi from "./users-api";

function* getUsersRequestSaga(action) {
  try {
    const { reload, id } = action.payload;
    const { data: payload } = yield call(usersApi.getUser, { id });
    if (reload) payload.avatarUrl += `?u=${Date.now()}`;
    yield put(usersActions.getUserSuccess(payload));
  } catch (error) {
    yield put(usersActions.getUserFailure(error));
  }
}

function* patchUsersRequestSaga(action) {
  try {
    const respond = yield call(usersApi.patchUser, action.payload);
    yield put(usersActions.patchUserSuccess(respond));
  } catch (error) {
    yield put(usersActions.patchUserFailure(error));
  }
}

const usersSaga = all([
  takeEvery(usersActionsTypes.GET_USER_REQUEST, getUsersRequestSaga),
  takeLatest(usersActionsTypes.PATCH_USER_REQUEST, patchUsersRequestSaga)
]);

export default usersSaga;
