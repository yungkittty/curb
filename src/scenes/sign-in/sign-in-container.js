import { connect } from "react-redux";
// eslint-disable-next-line
import SignIn from "./sign-in";
import { appModalActions } from "../../datas/app-modal";
import { signInActions, signInSelectors } from "../../datas/sign-in";

const mapStateToProps = state => ({
  isSignInFetching: signInSelectors.isSignInFetching(state)
});

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalFooterButton: payload => dispatch(appModalActions.setAppModalFooterButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
  signIn: payload => dispatch(signInActions.signInRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
