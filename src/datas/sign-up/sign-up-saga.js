import { all, takeEvery, take, call, put } from "redux-saga/effects";
import appModalActions from "../app-modal/app-modal-actions";
import signInActions from "../sign-in/sign-in-actions";
import usersActions from "../users/users-actions";
import signUpActionsTypes from "./sign-up-actions-types";
import signUpActions from "./sign-up-actions";
import signUpApi from "./sign-up-api";
import { signInApi } from "../sign-in";

function* signUpRequestSaga(action) {
  try {
    yield call(signUpApi.signUp, action.payload);
    if (action.payload.avatar) {
      const { data: payload } = yield call(signInApi.signIn, action.payload);
      yield put(
        usersActions.postUserAvatarRequest({
          id: payload.id,
          token: payload.token,
          payload: action.payload
        })
      );
      yield take("POST_USER_AVATAR_SUCCESS");
    }
    yield put(signInActions.signInRequest(action.payload));
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
