import { all, takeEvery, take, call, put } from "redux-saga/effects";
import appModalActions from "../app-modal/app-modal-actions";
import signInActions from "../sign-in/sign-in-actions";
import signUpActionsTypes from "./sign-up-actions-types";
import signUpActions from "./sign-up-actions";
import signUpApi from "./sign-up-api";
import { signInApi } from "../sign-in";
import usersAction from "../users/users-actions";

function* signUpRequestSaga(action) {
  try {
    yield call(signUpApi.signUp, action.payload);
    yield put(signInActions.signInRequest(action.payload));
    yield take("SIGN_IN_SUCCESS");
    if (action.payload.avatar) {
      yield put(usersAction.postUserAvatarRequest(action.payload));
      yield take("POST_USER_AVATAR_SUCCESS");
    }
    yield put(signUpActions.signUpSuccess());
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    yield put(signUpActions.signUpFailure(error));
  }
}

const signUpSaga = all([
  takeEvery(signUpActionsTypes.SIGN_UP_REQUEST, signUpRequestSaga)
]);

export default signUpSaga;
