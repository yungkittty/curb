import { connect } from "react-redux";
// eslint-disable-next-line
import ResetPassword1 from "./reset-password-1";
import { appModalActions } from "../../../../datas/app-modal";
import { signInActions } from "../../../../datas/sign-in";

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signInActions.signInRequest(payload)),
  setAppModalHeaderText: payload =>
    dispatch(appModalActions.setAppModalHeaderText(payload)),
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
)(ResetPassword1);
