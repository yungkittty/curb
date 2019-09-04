import appModalActionsTypes from "./app-modal-actions-types";

const appModalActions = {
  showAppModal: payload => ({
    type: appModalActionsTypes.SHOW_APP_MODAL,
    payload
  }),
  hideAppModal: () => ({
    type: appModalActionsTypes.HIDE_APP_MODAL,
    payload: undefined
  }),
  enableAppModalButtons: () => ({
    type: appModalActionsTypes.ENABLE_APP_MODAL_BUTTONS,
    payload: undefined
  }),
  disableAppModalButtons: () => ({
    type: appModalActionsTypes.DISABLE_APP_MODAL_BUTTONS,
    payload: undefined
  }),
  setAppModalHeaderText: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_HEADER_TEXT,
    payload
  }),
  setAppModalHeaderSteps: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_HEADER_STEPS,
    payload
  }),
  setAppModalHeaderLeftButtons: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_HEADER_LEFT_BUTTONS,
    payload
  }),
  setAppModalHeaderRightButtons: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_HEADER_RIGHT_BUTTONS,
    payload
  }),
  setAppModalHeaderBackButton: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_HEADER_BACK_BUTTON,
    payload
  }),
  setAppModalScene: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_SCENE,
    payload
  }),
  setAppModalSceneData: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_SCENE_DATA,
    payload
  }),
  setAppModalFooterButton: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_FOOTER_BUTTON,
    payload
  })
};

export default appModalActions;
