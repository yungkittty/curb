import _ from "lodash";
import appLoadingActionsTypes from "./app-loading-actions-types";
import { discoveryActionsTypes } from "../discovery";
import { usersActionsTypes } from "../users";

const initialState = {
  isAppLoaded: false,
  isUserLoaded: true,
  isDiscoveryLoaded: true,
  isImagesLoaded: false,
  loadingImages: 0,
  loadedImages: 0
};

const appLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersActionsTypes.GET_USER_REQUEST:
      return _.assign({}, state, { isUserLoaded: false });
    case usersActionsTypes.GET_USER_SUCCESS:
    case usersActionsTypes.GET_USER_FAILURE:
      return _.assign({}, state, { isUserLoaded: true });
    case discoveryActionsTypes.GET_DISCOVERY_REQUEST:
      return _.assign({}, state, { isDiscoveryLoaded: false });
    case discoveryActionsTypes.GET_DISCOVERY_SUCCESS:
    case discoveryActionsTypes.GET_DISCOVERY_FAILURE:
      return _.assign({}, state, { isDiscoveryLoaded: true });
    case appLoadingActionsTypes.ADD_LOADING_IMAGE:
      return _.assign({}, state, {
        loadingImages: state.loadingImages + 1
      });
    case appLoadingActionsTypes.ADD_LOADED_IMAGE:
      return _.assign({}, state, {
        isAppLoaded:
          state.isAppLoaded ||
          (state.isUserLoaded && state.isDiscoveryLoaded && state.loadingImages === state.loadedImages + 1),
        isImagesLoaded: state.loadingImages === state.loadedImages + 1,
        loadedImages: state.loadedImages + 1
      });
    default:
      return state;
  }
};

export default appLoadingReducer;
