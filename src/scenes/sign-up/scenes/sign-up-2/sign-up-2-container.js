import { connect } from "react-redux";
// eslint-disable-next-line
import SignUp2 from "./sign-up-2";
import { appModalActions } from "../../../../datas/app-modal";
import { signUpActions, signUpSelectors } from "../../../../datas/sign-up";
import { appAlertActions } from "../../../../datas/app-alert";

const mapStateToProps = state => ({
  isSignUpFetching: signUpSelectors.isSignUpFetching(state),
  signUpErrorCode: signUpSelectors.getSignUpErrorCode(state)
});

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderSteps: payload => dispatch(appModalActions.setAppModalHeaderSteps(payload)),
  setAppModalHeaderLeftButton: payload => dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalHeaderRightButton: payload => dispatch(appModalActions.setAppModalHeaderRightButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload => dispatch(appModalActions.setAppModalSceneData(payload)),
  setAppModalFooterButton: payload => dispatch(appModalActions.setAppModalFooterButton(payload)),
  hideAppModal: () => dispatch(appModalActions.hideAppModal()),
  pushAppAlert: payload => dispatch(appAlertActions.pushAppAlert(payload)),
  signUp: payload => dispatch(signUpActions.signUpRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp2);
