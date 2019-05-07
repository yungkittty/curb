import appNavigationActionsTypes from "./app-navigation-actions-types";

const appNavigationActions = {
  showAppNavigation: () => ({
    type: appNavigationActionsTypes.SHOW_APP_NAVIGATION,
    payload: undefined
  }),
  hideAppNavigation: () => ({
    type: appNavigationActionsTypes.HIDE_APP_NAVIGATION,
    payload: undefined
  })
};

export default appNavigationActions;
