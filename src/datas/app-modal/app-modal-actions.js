import appModalActionsTypes from "./app-modal-actions-types";

const appModalActions = {
  showAppModal: payload => ({
    type: appModalActionsTypes.SHOW_APP_MODAL,
    payload
  }),
  setAppModalHeaderText: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_HEADER_TEXT,
    payload
  }),
  setAppModalHeaderSteps: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_HEADER_STEPS,
    payload
  }),
  setAppModalHeaderLeftButton: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_HEADER_LEFT_BUTTON,
    payload
  }),
  setAppModalHeaderRightButton: payload => ({
    type: appModalActionsTypes.SET_APP_MODAL_HEADER_RIGHT_BUTTON,
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
  }),
  hideAppModal: payload => ({
    type: appModalActionsTypes.HIDE_APP_MODAL,
    payload
  }),
  didMountAppModal: () => ({
    type: appModalActionsTypes.DID_MOUNT_APP_MODAL,
    payload: undefined
  }),
  unmountAppModal: () => ({
    type: appModalActionsTypes.UNMOUNT_APP_MODAL,
    payload: undefined
  })
};

export default appModalActions;
