import { connect } from "react-redux";
// eslint-disable-next-line
import SignIn from "./sign-in";
import { appModalActions } from "../../datas/app-modal";
import { signInActions, signInSelectors } from "../../datas/sign-in";

const mapStateToProps = state => ({
  isSignInFetching: signInSelectors.isSignInFetching(state)
});

const mapDispatchToProps = dispatch => ({
  enableAppModalButtons: () => dispatch(appModalActions.enableAppModalButtons()),
  disableAppModalButtons: () => dispatch(appModalActions.disableAppModalButtons()),
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalFooterButton: payload => dispatch(appModalActions.setAppModalFooterButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload => dispatch(appModalActions.setAppModalSceneData(payload)),
  hideAppModal: () => dispatch(appModalActions.hideAppModal()),
  signIn: payload => dispatch(signInActions.signInRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
