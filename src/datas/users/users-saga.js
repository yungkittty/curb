import { all, takeEvery, takeLatest, call, put } from "redux-saga/effects";
import usersActionsTypes from "./users-actions-types";
import usersActions from "./users-actions";
import usersApi from "./users-api";
import appAlertActions from "../app-alert/app-alert-actions";

function* getUsersRequestSaga(action) {
  try {
    const { data: payload } = yield call(usersApi.getUser, action.payload);
    yield put(usersActions.getUserSuccess(payload));
  } catch (error) {
    yield put(usersActions.getUserFailure(error));
  }
}

function* patchUsersRequestSaga(action) {
  const { id, payload } = action.payload;
  try {
    const respond = yield call(usersApi.patchUser, { id, payload });
    yield put(usersActions.patchUserSuccess(respond));
    yield put(
      appAlertActions.pushAppAlert({
        type: "success",
        message: "patchUser.userSuccess",
        icon: "check"
      })
    );
    yield put(usersActions.getUserRequest({ id }));
  } catch (error) {
    yield put(usersActions.patchUserFailure(error));
    yield put(
      appAlertActions.pushAppAlert({
        type: "error",
        message: `patchUser.${error.response.data.code}`,
        icon: "times"
      })
    );
  }
}

const usersSaga = all([
  takeEvery(usersActionsTypes.GET_USER_REQUEST, getUsersRequestSaga),
  takeLatest(usersActionsTypes.PATCH_USER_REQUEST, patchUsersRequestSaga)
]);

export default usersSaga;
