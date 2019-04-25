import { all, takeLatest, select, call, put } from "redux-saga/effects";
import accountActionsTypes from "./account-actions-types";
import accountActions from "./account-actions";
import accountApi from "./account-api";
import appModalActions from "../app-modal/app-modal-actions";
import currentUserSelectors from "../current-user/current-user-selectors";

function* deleteAccountRequestSaga() {
  try {
    const currentUserId = yield select(currentUserSelectors.getCurrentUserId);
    yield call(accountApi.deleteAccount, { currentUserId });
    yield put(accountActions.deleteAccountSuccess());
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    const { code: errorCode = "UNKNOW" } = ((error || {}).response || {}).data;
    yield put(accountActions.deleteAccountFailure({ errorCode }));
  }
}

const accountSaga = all([
  // eslint-disable-line
  takeLatest(accountActionsTypes.DELETE_ACCOUNT_REQUEST, deleteAccountRequestSaga)
]);

export default accountSaga;
