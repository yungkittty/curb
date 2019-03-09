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
      return _.assign({}, initialState, { isShowed: true, scene: action.payload.scene });
    case appModalActionsTypes.SET_APP_MODAL_HEADER_TEXT:
      return _.assign({}, state, { headerText: action.payload.headerText });
    case appModalActionsTypes.SET_APP_MODAL_HEADER_STEPS:
      return _.assign({}, state, { headerCurrentStep: action.payload.headerCurrentStep, headerSteps: action.payload.headerSteps });
    case appModalActionsTypes.SET_APP_MODAL_HEADER_LEFT_BUTTON:
      return _.assign({}, state, { headerLeftIcon: action.payload.headerLeftIcon, headerLeftOnClick: action.payload.headerLeftOnClick });
    case appModalActionsTypes.SET_APP_MODAL_HEADER_RIGHT_BUTTON:
      return _.assign({}, state, { headerRightIcon: action.payload.headerRightIcon, headerRightOnClick: action.payload.headerRightOnClick });
    case appModalActionsTypes.SET_APP_MODAL_SCENE:
      return _.assign({}, initialState, { isShowed: true, scene: action.payload.scene, sceneDirection: action.payload.sceneDirection, sceneData: state.sceneData });
    case appModalActionsTypes.SET_APP_MODAL_SCENE_DATA:
      return _.assign({}, state, { sceneData: _.assign({}, state.sceneData, action.payload) });
    case appModalActionsTypes.SET_APP_MODAL_FOOTER_BUTTON:
      return _.assign({}, state, { footerText: action.payload.footerText, footerOnClick: action.payload.footerOnClick });
    case appModalActionsTypes.HIDE_APP_MODAL:
      return _.assign({}, initialState);
    default:
      return state;
  }
};

export default appModalReducer;
