import _ from "lodash";
import appAlertActionsTypes from "./app-alert-actions-types";

const initialState = {
  list: []
};

const appAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case appAlertActionsTypes.PUSH_APP_ALERT:
      return { ...state, list: [...state.list, action.payload] };
    case appAlertActionsTypes.CLEAR_APP_ALERT:
      return initialState;
    default:
      return state;
  }
};

export default appAlertReducer;
