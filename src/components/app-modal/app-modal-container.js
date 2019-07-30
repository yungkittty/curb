import { connect } from "react-redux";
import AppModal from "./app-modal";
import { appModalActions, appModalSelectors } from "../../datas/app-modal";

const mapStateToProps = state => ({
  isAppModalShowed: appModalSelectors.isAppModalShowed(state),
  areAppModalButtonsDisabled: appModalSelectors.areAppModalButtonsDisabled(state),
  appModalHeaderText: appModalSelectors.getAppModalHeaderText(state),
  appModalHeaderCurrentStep: appModalSelectors.getAppModalHeaderCurrentStep(state),
  appModalHeaderSteps: appModalSelectors.getAppModalHeaderSteps(state),
  appModalHeaderLeftButtons: appModalSelectors.getAppModalHeaderLeftButtons(state),
  appModalHeaderRightButtons: appModalSelectors.getAppModalHeaderRightButtons(state),
  appModalHeaderBackButton: appModalSelectors.getAppModalHeaderBackButton(state),
  appModalScene: appModalSelectors.getAppModalScene(state),
  appModalSceneDirection: appModalSelectors.getAppModalSceneDirection(state),
  appModalSceneData: appModalSelectors.getAppModalSceneData(state),
  appModalFooterText: appModalSelectors.getAppModalFooterText(state),
  appModalFooterOnClick: appModalSelectors.getAppModalFooterOnClick(state)
});

const mapDispatchToProps = dispatch => ({
  hideAppModal: () => dispatch(appModalActions.hideAppModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppModal);
