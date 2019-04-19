import appAlertActionsTypes from "./app-alert-actions-types";

const appAlertActions = {
  pushAppAlert: payload => ({
    type: appAlertActionsTypes.PUSH_APP_ALERT,
    payload
  }),
  clearAppAlert: payload => ({
    type: appAlertActionsTypes.CLEAR_APP_ALERT,
    payload
  })
};

export default appAlertActions;
