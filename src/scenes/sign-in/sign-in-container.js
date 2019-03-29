import { connect } from "react-redux";
// eslint-disable-next-line
import SignIn from "./sign-in";
import { appModalActions } from "../../datas/app-modal";
import { signInActions } from "../../datas/sign-in";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload =>
    dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalFooterButton: payload =>
    dispatch(appModalActions.setAppModalFooterButton(payload)),
  setAppModalScene: payload =>
    dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload =>
    dispatch(appModalActions.setAppModalSceneData(payload)),
  signIn: payload => dispatch(signInActions.signInRequest(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SignIn);
