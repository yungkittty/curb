import { connect } from "react-redux";
// eslint-disable-next-line
import ResetPassword3 from "./reset-password-3";
import { appModalActions } from "../../../../datas/app-modal";
import { signInActions } from "../../../../datas/sign-in";

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signInActions.signInRequest(payload)),
  setAppModalHeaderSteps: payload =>
    dispatch(appModalActions.setAppModalHeaderSteps(payload)),
  setAppModalHeaderLeftButton: payload =>
    dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalScene: payload =>
    dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload =>
    dispatch(appModalActions.setAppModalSceneData(payload)),
  setAppModalFooterButton: payload =>
    dispatch(appModalActions.setAppModalFooterButton(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(ResetPassword3);
