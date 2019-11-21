const feedbackSelectors = {};

feedbackSelectors.isFetchingFeedback = state => state.feedback.isFetching;

feedbackSelectors.getFeedbackErrorCode = state => state.feedback.errorCode;

export default feedbackSelectors;
