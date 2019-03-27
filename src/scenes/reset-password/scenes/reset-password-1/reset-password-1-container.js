import { connect } from "react-redux";
// eslint-disable-next-line
import ResetPassword1 from "./reset-password-1";
import { accountActions } from "../../../../datas/account";
import { appModalActions } from "../../../../datas/app-modal";

const mapDispatchToProps = dispatch => ({
  emailResetPass: payload =>
    dispatch(accountActions.emailResetPassRequest(payload)),
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
)(ResetPassword1);
