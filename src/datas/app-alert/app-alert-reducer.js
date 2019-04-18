import _ from "lodash";
import appAlertActionsTypes from "./app-alert-actions-types";

const initialState = {
  list: []
};

const appAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case appAlertActionsTypes.PUSH_APP_ALERT:
      return { ...state, list: [...state.list, action.payload] };
    case appAlertActionsTypes.POP_APP_ALERT:
      state.list.pop();
      return { ...state, list: [...state.list] };
    default:
      return state;
  }
};

export default appAlertReducer;
