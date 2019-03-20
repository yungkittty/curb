import { connect } from "react-redux";
import AppModal from "./app-modal";
import { appModalActions, appModalSelectors } from "../../datas/app-modal";

const mapStateToProps = state => ({
  isAppModalShowed: appModalSelectors.isAppModalShowed(state),
  appModalHeaderText: appModalSelectors.getAppModalHeaderText(state),
  appModalHeaderCurrentStep: appModalSelectors.getAppModalHeaderCurrentStep(state),
  appModalHeaderSteps: appModalSelectors.getAppModalHeaderSteps(state),
  appModalHeaderLeftIcon: appModalSelectors.getAppModalHeaderLeftIcon(state),
  appModalHeaderLeftOnClick: appModalSelectors.getAppModalHeaderLeftOnClick(state),
  appModalHeaderRightIcon: appModalSelectors.getAppModalHeaderRightIcon(state) || "times",
  appModalHeaderRightOnClick: appModalSelectors.getAppModalHeaderRightOnClick(state),
  appModalScene: appModalSelectors.getAppModalScene(state),
  appModalSceneDirection: appModalSelectors.getAppModalSceneDirection(state),
  appModalSceneData: appModalSelectors.getAppModalSceneData(state),
  appModalFooterText: appModalSelectors.getAppModalFooterText(state),
  appModalFooterOnClick: appModalSelectors.getAppModalFooterOnClick(state),
});

const mapDispatchToProps = dispatch => ({
  appModalHeaderRightOnClick: () => dispatch(appModalActions.hideAppModal())
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...(!stateProps.appModalHeaderRightOnClick ? dispatchProps : {})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AppModal);
