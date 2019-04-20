import { all, takeEvery, takeLatest, call, put, select } from "redux-saga/effects";
import usersActionsTypes from "./users-actions-types";
import usersActions from "./users-actions";
import usersApi from "./users-api";
import { currentUserSelectors } from "../current-user";
import { appAlertActions } from "../app-alert";

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
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    const respond = yield call(usersApi.patchUser, { id: currentUserId, payload: action.payload });
    yield put(usersActions.patchUserSuccess(respond));
  } catch (error) {
    yield put(usersActions.patchUserFailure(error));
  }
}

function* postUsersAvatarRequestSaga(action) {
  try {
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield put(
      appAlertActions.pushAppAlert({
        type: "info",
        message: "Your avatar is uploading...",
        persistUntilNext: true
      })
    );
    const respond = yield call(usersApi.postUserAvatar, { id: currentUserId, payload: action.payload });
    yield put(appAlertActions.pushAppAlert({ type: "success", message: "Your avatar has been uploaded" }));
    yield put(usersActions.postUserAvatarSuccess(respond));
  } catch (error) {
    yield put(appAlertActions.pushAppAlert, { type: "error", message: "Your avatar has failed to upload" });
    yield put(usersActions.postUserAvatarFailure(error));
  }
}

const usersSaga = all([
  takeEvery(usersActionsTypes.GET_USER_REQUEST, getUsersRequestSaga),
  takeLatest(usersActionsTypes.PATCH_USER_REQUEST, patchUsersRequestSaga),
  takeLatest(usersActionsTypes.POST_USER_AVATAR_REQUEST, postUsersAvatarRequestSaga)
]);

export default usersSaga;
