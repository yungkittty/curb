import { connect } from "react-redux";
import { appModalActions } from "../../datas/app-modal";

const withAppModal = WrappedComponent => {
  const mapDispatchToProps = dispatch => ({
    showAppModal: payload => dispatch(appModalActions.showAppModal(payload)),
    enableAppModalButtons: () => dispatch(appModalActions.enableAppModalButtons()),
    setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
    setAppModalHeaderSteps: payload => dispatch(appModalActions.setAppModalHeaderSteps(payload)),
    setAppModalHeaderLeftButton: payload => dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
    setAppModalHeaderRightButton: payload => dispatch(appModalActions.setAppModalHeaderRightButton(payload)),
    setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
    setAppModalSceneData: payload => dispatch(appModalActions.setAppModalSceneData(payload)),
    setAppModalFooterButton: payload => dispatch(appModalActions.setAppModalFooterButton(payload)),
    disableAppModalButtons: () => dispatch(appModalActions.disableAppModalButtons()),
    hideAppModal: () => dispatch(appModalActions.hideAppModal())
  });

  return connect(
    undefined,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withAppModal;
