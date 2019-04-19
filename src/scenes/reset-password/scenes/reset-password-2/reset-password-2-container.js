import { connect } from "react-redux";
/* eslint-disable */
import ResetPassword2 from "./reset-password-2";
import { accountActions, accountSelectors } from "../../../../datas/account";
/* eslint-enable */
import { appModalActions } from "../../../../datas/app-modal";

const mapStateToProps = state => ({
  isAccountValidateCodeFetching: accountSelectors.isAccountValidateCodeFetching(state) || false,
  isAccountValidateCodeSuccess: accountSelectors.isAccountValidateCodeSuccess(state) || false,
  accountValidateCodeErrorCode: accountSelectors.getAccountValidateCodeErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  validateCode: payload => dispatch(accountActions.validateCodeRequest(payload)),
  enableAppModalButtons: payload => dispatch(appModalActions.enableAppModalButtons(payload)),
  setAppModalHeaderSteps: payload => dispatch(appModalActions.setAppModalHeaderSteps(payload)),
  setAppModalHeaderLeftButton: payload => dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload => dispatch(appModalActions.setAppModalSceneData(payload)),
  setAppModalFooterButton: payload => dispatch(appModalActions.setAppModalFooterButton(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword2);
