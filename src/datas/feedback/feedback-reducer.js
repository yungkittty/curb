import { combineReducers } from "redux";
import feedbackActionsTypes from "./feedback-actions-types";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case feedbackActionsTypes.POST_FEEDBACK_REQUEST:
      return true;
    case feedbackActionsTypes.POST_FEEDBACK_SUCCESS:
    case feedbackActionsTypes.POST_FEEDBACK_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorCode = (state = "", action) => {
  switch (action.type) {
    case feedbackActionsTypes.POST_FEEDBACK_REQUEST:
    case feedbackActionsTypes.POST_FEEDBACK_SUCCESS:
      return "";
    case feedbackActionsTypes.POST_FEEDBACK_FAILURE:
      return action.payload.errorCode;
    default:
      return state;
  }
};

const feedbackReducer = combineReducers({
  // eslint-disable-line
  isFetching,
  errorCode
});

export default feedbackReducer;
