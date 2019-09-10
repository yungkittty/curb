import { all, takeLatest, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import usersActionsTypes from "./users-actions-types";
import usersActions from "./users-actions";
import usersApi from "./users-api";
import appAlertActions from "../app-alert/app-alert-actions";
import mediasActions from "../medias/medias-actions";

function* getUserRequestSaga(action) {
  try {
    const { data: payload } = yield call(usersApi.getUser, action.payload);
    yield put(usersActions.getUserSuccess(payload));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(usersActions.getUserFailure({ id: action.payload.id, errorCode }));
  }
}

function* patchUserRequestSaga(action) {
  try {
    const { id, avatar = {}, ...others } = action.payload;
    yield call(usersApi.patchUser, { ...others, id });
    if (avatar.file) yield put(mediasActions.postMediaAvatarUserRequest({ id, avatar }));
    yield put(usersActions.patchUserSuccess({ ...others, id }));
    const successAlert = { type: "success", message: "patchUser.userSuccess", icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(usersActions.patchUserFailure({ errorCode }));
    const errorAlert = { type: "error", message: `patchUser.${errorCode}`, icon: "times" };
    yield put(appAlertActions.pushAppAlert(errorAlert));
  }
}

const usersSaga = all([
  takeNormalize(usersActionsTypes.GET_USER_REQUEST, getUserRequestSaga),
  takeLatest(usersActionsTypes.PATCH_USER_REQUEST, patchUserRequestSaga)
]);

export default usersSaga;
