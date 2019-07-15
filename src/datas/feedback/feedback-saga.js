import { all, takeLatest, call, put } from "redux-saga/effects";
import feedbackActionsTypes from "./feedback-actions-types";
import feedbackActions from "./feedback-actions";
import feedbackApi from "./feedback-api";
import appAlertActions from "../app-alert/app-alert-actions";
import appModalActions from "../app-modal/app-modal-actions";

function* postFeedbackRequestSaga(action) {
  try {
    const { data: payload } = yield call(feedbackApi.postFeedback, action.payload);
    yield put(feedbackActions.postFeedbackSuccess({ feedbackId: payload.id }));
    const successAlert = { type: "success", message: `feedback.Success`, icon: "check" };
    yield put(appAlertActions.pushAppAlert(successAlert));
    yield put(appModalActions.hideAppModal());
  } catch (error) {
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(feedbackActions.postFeedbackFailure({ errorCode }));
    const errorAlert = { type: "error", message: `feedback.${errorCode}`, icon: "times" };
    yield put(appAlertActions.pushAppAlert(errorAlert));
    yield put(appModalActions.hideAppModal());

  }
}

const feedbackSaga = all([
  takeLatest(feedbackActionsTypes.POST_FEEDBACK_REQUEST, postFeedbackRequestSaga)
]);

export default feedbackSaga;
