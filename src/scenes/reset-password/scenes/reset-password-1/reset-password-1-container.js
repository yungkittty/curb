import { connect } from "react-redux";
/* eslint-disable */
import ResetPassword1 from "./reset-password-1";
import { accountActions, accountSelectors } from "../../../../datas/account";
/* eslint-enable */
import { appModalActions } from "../../../../datas/app-modal";

const mapStateToProps = state => ({
  isAccountRequestCodeFetching: accountSelectors.isAccountRequestCodeFetching(state) || false,
  isAccountRequestCodeSuccess: accountSelectors.isAccountRequestCodeSuccess(state) || false,
  accountRequestCodeErrorCode: accountSelectors.getAccountRequestCodeErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  requestCode: payload => dispatch(accountActions.requestCodeRequest(payload)),
  setAppModalButtonsEnabled: payload => dispatch(appModalActions.setAppModalButtonsEnabled(payload)),
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
