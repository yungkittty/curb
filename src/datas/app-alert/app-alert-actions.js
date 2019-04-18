import appAlertActionsTypes from "./app-alert-actions-types";

const appAlertActions = {
  pushAppAlert: payload => ({
    type: appAlertActionsTypes.PUSH_APP_ALERT,
    payload
  }),
  popAppAlert: payload => ({
    type: appAlertActionsTypes.POP_APP_ALERT,
    payload
  })
};

export default appAlertActions;
