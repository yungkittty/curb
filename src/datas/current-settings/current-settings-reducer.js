import { combineReducers } from "redux";
import currentSettingsActionsTypes from "./current-settings-actions-types";

const language = (state = "", action) => {
  switch (action.type) {
    case currentSettingsActionsTypes.SET_CURRENT_SETTINGS_LANGUAGE:
      return action.payload.language;
    default:
      return state;
  }
};

const currentSettingsReducer = combineReducers({
  // eslint-disable-line
  language
});

export default currentSettingsReducer;
