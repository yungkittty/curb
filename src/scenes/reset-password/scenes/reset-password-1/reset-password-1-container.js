import { connect } from "react-redux";
/* eslint-disable */
import ResetPassword1 from "./reset-password-1";
import { accountActions, accountSelectors } from "../../../../datas/account";
/* eslint-enable */
import { appModalActions } from "../../../../datas/app-modal";

const mapStateToProps = state => ({
  isAccountFetching: accountSelectors.isAccountFetching(state) || false,
  accountErrorCode: accountSelectors.getAccountErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  requestAccountResetPasswordCode: payload =>
    dispatch(accountActions.requestAccountResetPasswordCodeRequest(payload)),
  enableAppModalButtons: () => dispatch(appModalActions.enableAppModalButtons()),
  disableAppModalButtons: () => dispatch(appModalActions.disableAppModalButtons()),
  setAppModalHeaderSteps: payload => dispatch(appModalActions.setAppModalHeaderSteps(payload)),
  setAppModalHeaderLeftButton: payload => dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload => dispatch(appModalActions.setAppModalSceneData(payload)),
  setAppModalFooterButton: payload => dispatch(appModalActions.setAppModalFooterButton(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword1);
