import _ from "lodash";
import appModalActionsTypes from "./app-modal-actions-types";

const initialState = {
  isShowed: false,
  headerText: "",
  headerCurrentStep: 0,
  headerSteps: 0,
  headerLeftIcon: "",
  headerLeftOnClick: null,
  headerRightIcon: "",
  headerRightOnClick: null,
  scene: null,
  sceneDirection: 0,
  sceneData: {},
  footerText: "",
  footerOnClick: null
};

const appModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case appModalActionsTypes.SHOW_APP_MODAL:
      return _.assign({}, initialState, {
        isShowed: true,
        scene: action.payload.scene
      });
    case appModalActionsTypes.SET_APP_MODAL_HEADER_TEXT:
      return _.assign({}, state, {
        headerText: action.payload.text
      });
    case appModalActionsTypes.SET_APP_MODAL_HEADER_STEPS:
      return _.assign({}, state, {
        headerCurrentStep: action.payload.currentStep,
        headerSteps: action.payload.steps
      });
    case appModalActionsTypes.SET_APP_MODAL_HEADER_LEFT_BUTTON:
      return _.assign({}, state, {
        headerLeftIcon: action.payload.icon,
        headerLeftOnClick: action.payload.onClick
      });
    case appModalActionsTypes.SET_APP_MODAL_HEADER_RIGHT_BUTTON:
      return _.assign({}, state, {
        headerRightIcon: action.payload.icon,
        headerRightOnClick: action.payload.onClick
      });
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return _.assign({}, initialState, {
        isShowed: true,
        scene: action.payload.scene,
        sceneDirection: action.payload.direction,
        sceneData: state.sceneData
      });
    case appModalActionsTypes.SET_APP_MODAL_SCENE_DATA:
      return _.assign({}, state, {
        sceneData: _.assign({}, state.sceneData, action.payload)
      });
    case appModalActionsTypes.SET_APP_MODAL_FOOTER_BUTTON:
      return _.assign({}, state, {
        footerText: action.payload.text,
        footerOnClick: action.payload.onClick
      });
    case appModalActionsTypes.HIDE_APP_MODAL:
      return _.assign({}, initialState);
    default:
      return state;
  }
};

export default appModalReducer;
