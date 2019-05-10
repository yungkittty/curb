import { all, takeLatest, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import usersActionsTypes from "./users-actions-types";
import usersActions from "./users-actions";
import usersApi from "./users-api";
import appAlertActions from "../app-alert/app-alert-actions";

function* getUsersRequestSaga(action) {
  try {
    const { data: payload } = yield call(usersApi.getUser, action.payload);
    yield put(usersActions.getUserSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data || {};
    yield put(usersActions.getUserFailure({ id: action.payload.id, errorCode }));
  }
}

function* patchUsersRequestSaga(action) {
  try {
    const { data: payload } = yield call(usersApi.patchUser, action.payload);
    yield put(usersActions.patchUserSuccess(payload));
    const successAlert = { type: "success", message: "patchUser.userSuccess", icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
  } catch (error) {
    yield put(usersActions.patchUserFailure(error));
    const errorAlert = { type: "error", message: `patchUser.${error.response.data.code}`, icon: "times" };
    yield put(appAlertActions.pushAppAlert(errorAlert));
  }
}

const usersSaga = all([
  takeNormalize(usersActionsTypes.GET_USER_REQUEST, getUsersRequestSaga),
  takeLatest(usersActionsTypes.PATCH_USER_REQUEST, patchUsersRequestSaga)
]);

export default usersSaga;
