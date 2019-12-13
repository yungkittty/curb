import { all, takeLatest, call, join, fork, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import usersActionsTypes from "./users-actions-types";
import usersActions from "./users-actions";
import usersApi from "./users-api";
import appAlertActions from "../app-alert/app-alert-actions";
import { postMediaAvatarUserRequestSaga } from "../medias/medias-saga";

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
    const { id, name, avatar = {}, ...others } = action.payload;
    const userActionsToWait = [];
    if (name) userActionsToWait.push(yield fork(usersApi.patchUser, { id, name }));
    if (avatar.file)
      userActionsToWait.push(yield fork(postMediaAvatarUserRequestSaga, { payload: { ...others, id, avatar } }));
    for (let i = 0; i < userActionsToWait.length; i += 1) yield join(userActionsToWait[i]);
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
