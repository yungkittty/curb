import appNavigationActionsTypes from "./app-navigation-actions-types";

const initialState = { isShowed: false };

const appNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case appNavigationActionsTypes.SHOW_APP_NAVIGATION:
      return { ...state, isShowed: true };
    case appNavigationActionsTypes.HIDE_APP_NAVIGATION:
      return { ...state, isShowed: false };
    default:
      return state;
  }
};

export default appNavigationReducer;
