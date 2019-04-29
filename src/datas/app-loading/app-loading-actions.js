import appLoadingActionsTypes from "./app-loading-actions-types";

const appLoadingActions = {
  addLoadingImage: payload => ({
    type: appLoadingActionsTypes.ADD_LOADING_IMAGE,
    payload
  }),
  addLoadedImage: payload => ({
    type: appLoadingActionsTypes.ADD_LOADED_IMAGE,
    payload
  })
};

export default appLoadingActions;
