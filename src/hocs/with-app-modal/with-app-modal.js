import { connect } from "react-redux";
import { appModalActions } from "../../datas/app-modal";

const withAppModal = WrappedComponent => {
  const mapDispatchToProps = dispatch => ({
    showAppModal: payload => dispatch(appModalActions.showAppModal(payload)),
    hideAppModal: () => dispatch(appModalActions.hideAppModal()),
    enableAppModalButtons: () => dispatch(appModalActions.enableAppModalButtons()),
    disableAppModalButtons: () => dispatch(appModalActions.disableAppModalButtons()),
    setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
    setAppModalHeaderSteps: payload => dispatch(appModalActions.setAppModalHeaderSteps(payload)),
    setAppModalHeaderLeftButtons: payload => dispatch(appModalActions.setAppModalHeaderLeftButtons(payload)),
    setAppModalHeaderRightButtons: payload => dispatch(appModalActions.setAppModalHeaderRightButtons(payload)),
    setAppModalHeaderBackButton: payload => dispatch(appModalActions.setAppModalHeaderBackButton(payload)),
    setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
    setAppModalSceneData: payload => dispatch(appModalActions.setAppModalSceneData(payload)),
    setAppModalFooterButton: payload => dispatch(appModalActions.setAppModalFooterButton(payload)),
  });

  return connect(
    undefined,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withAppModal;
