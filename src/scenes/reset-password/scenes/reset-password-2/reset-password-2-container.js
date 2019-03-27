import { connect } from "react-redux";
// eslint-disable-next-line
import ResetPassword2 from "./reset-password-2";
import { appModalActions } from "../../../../datas/app-modal";
// eslint-disable-next-line
import { accountActions } from "../../../../datas/account";

const mapDispatchToProps = dispatch => ({
  validateCode: payload =>
    dispatch(accountActions.validateCodeRequest(payload)),
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
)(ResetPassword2);
