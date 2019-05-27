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
  try {
    const { data: payload } = yield call(usersApi.patchUser, action.payload);
    yield put(usersActions.patchUserSuccess(payload));
    yield put(
      appAlertActions.pushAppAlert({
        type: "success",
        message: "patchUser.userSuccess",
        icon: "check"
      })
    );
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
