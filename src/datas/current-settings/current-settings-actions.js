import currentSettingsActionsTypes from "./current-settings-actions-types";

const currentSettingsActions = {
  setCurrentSettingsLanguage: payload => ({
    type: currentSettingsActionsTypes.SET_CURRENT_SETTINGS_LANGUAGE,
    payload
  })
};

export default currentSettingsActions;
