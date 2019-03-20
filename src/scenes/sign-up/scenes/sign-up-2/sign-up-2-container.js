import { connect } from "react-redux";
// eslint-disable-next-line
import SignUp2 from "./sign-up-2";
import { appModalActions } from "../../../../datas/app-modal";
import { signUpActions } from "../../../../datas/sign-up";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderSteps: payload =>
    dispatch(appModalActions.setAppModalHeaderSteps(payload)),
  setAppModalHeaderLeftButton: payload =>
    dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalScene: payload =>
    dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload =>
    dispatch(appModalActions.setAppModalSceneData(payload)),
  setAppModalFooterButton: payload =>
    dispatch(appModalActions.setAppModalFooterButton(payload)),
  signUp: payload => dispatch(signUpActions.signUpRequest(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SignUp2);
