import feedbackActionsTypes from "./feedback-actions-types";

const feedbackActions = {
   getFeedbackRequest: payload => ({
    type: feedbackActionsTypes.GET_FEEDBACK_REQUEST,
    payload
  }),
  getFeedbackSuccess: payload => ({
    type: feedbackActionsTypes.GET_FEEDBACK_SUCCESS,
    payload
  }),
  getFeedbackFailure: error => ({
    type: feedbackActionsTypes.GET_FEEDBACK_FAILURE,
    payload: error,
    error: true
  }),
  postFeedbackRequest: payload => ({
    type: feedbackActionsTypes.POST_FEEDBACK_REQUEST,
    payload
  }),
  postFeedbackSuccess: payload => ({
    type: feedbackActionsTypes.POST_FEEDBACK_SUCCESS,
    payload
  }),
  postFeedbackFailure: error => ({
    type: feedbackActionsTypes.POST_FEEDBACK_FAILURE,
    payload: error,
    error: true
  })
};

export default feedbackActions;
