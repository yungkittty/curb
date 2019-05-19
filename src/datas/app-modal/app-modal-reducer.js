import { combineReducers } from "redux";
import appModalActionsTypes from "./app-modal-actions-types";

const isShowed = (state = false, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
      return true;
    case appModalActionsTypes.HIDE_APP_MODAL:
      return false;
    default:
      return state;
  }
};

const isButtonsEnabled = (state = false, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.ENABLE_APP_MODAL_BUTTONS:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return true;
    case appModalActionsTypes.DISABLE_APP_MODAL_BUTTONS:
      return false;
    default:
      return state;
  }
};

const headerText = (state = "", action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return "";
    case appModalActionsTypes.SET_APP_MODAL_HEADER_TEXT:
      return action.payload.text;
    default:
      return state;
  }
};

const headerCurrentStep = (state = 0, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return 0;
    case appModalActionsTypes.SET_APP_MODAL_HEADER_STEPS:
      return action.payload.currentStep;
    default:
      return state;
  }
};

const headerSteps = (state = 0, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return 0;
    case appModalActionsTypes.SET_APP_MODAL_HEADER_STEPS:
      return action.payload.steps;
    default:
      return state;
  }
};

const headerLeftIcon = (state = "", action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return "";
    case appModalActionsTypes.SET_APP_MODAL_HEADER_LEFT_BUTTON:
      return action.payload.icon;
    default:
      return state;
  }
};

const headerLeftOnClick = (state = null, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return null;
    case appModalActionsTypes.SET_APP_MODAL_HEADER_LEFT_BUTTON:
      return action.payload.onClick;
    default:
      return state;
  }
};

const headerRightIcon = (state = "", action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return "";
    case appModalActionsTypes.SET_APP_MODAL_HEADER_RIGHT_BUTTON:
      return action.payload.icon;
    default:
      return state;
  }
};

const headerRightOnClick = (state = null, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return "";
    case appModalActionsTypes.SET_APP_MODAL_HEADER_RIGHT_BUTTON:
      return action.payload.onClick;
    default:
      return state;
  }
};

const scene = (state = null, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return action.payload.scene;
    default:
      return state;
  }
};

const sceneDirection = (state = 0, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
      return 0;
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return action.payload.direction;
    default:
      return state;
  }
};

const sceneData = (state = {}, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
      return {};
    case appModalActionsTypes.SET_APP_MODAL_SCENE_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const footerText = (state = "", action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return "";
    case appModalActionsTypes.SET_APP_MODAL_FOOTER_BUTTON:
      return action.payload.text;
    default:
      return state;
  }
};

const footerOnClick = (state = null, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return null;
    case appModalActionsTypes.SET_APP_MODAL_FOOTER_BUTTON:
      return action.payload.onClick;
    default:
      return state;
  }
};

const appModalReducer = combineReducers({
  isShowed,
  isButtonsEnabled,
  headerText,
  headerCurrentStep,
  headerSteps,
  headerLeftIcon,
  headerLeftOnClick,
  headerRightIcon,
  headerRightOnClick,
  scene,
  sceneDirection,
  sceneData,
  footerText,
  footerOnClick
});

export default appModalReducer;
