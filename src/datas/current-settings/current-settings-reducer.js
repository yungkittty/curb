import _ from "lodash";
import currentSettingsActionsTypes from "./current-settings-actions-types";

const initialState = { language: "" };

const currentSettings = (state = initialState, action) => {
  switch (action.type) {
    case currentSettingsActionsTypes.SET_CURRENT_SETTINGS_LANGUAGE:
      return _.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default currentSettings;
