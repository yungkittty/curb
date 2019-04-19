import { connect } from "react-redux";
/* eslint-disable */
import ResetPassword3 from "./reset-password-3";
import { accountActions, accountSelectors } from "../../../../datas/account";
/* eslint-enable */
import { appModalActions } from "../../../../datas/app-modal";

const mapStateToProps = state => ({
  isAccountResetPassFetching: accountSelectors.isAccountResetPassFetching(state) || false,
  isAccountResetPassSuccess: accountSelectors.isAccountResetPassSuccess(state) || false,
  accountResetPassErrorCode: accountSelectors.getAccountResetPassErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  resetPass: payload => dispatch(accountActions.resetPassRequest(payload)),
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
)(ResetPassword3);
