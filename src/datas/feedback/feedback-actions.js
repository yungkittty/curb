import feedbackActionsTypes from "./feedback-actions-types";

const feedbackActions = {
  postFeedbackRequest: payload => ({
    type: feedbackActionsTypes.POST_FEEDBACK_REQUEST,
    payload
  }),
  postFeedbackSuccess: () => ({
    type: feedbackActionsTypes.POST_FEEDBACK_SUCCESS,
    payload: undefined
  }),
  postFeedbackFailure: error => ({
    type: feedbackActionsTypes.POST_FEEDBACK_FAILURE,
    payload: error,
    error: true
  })
};

export default feedbackActions;
