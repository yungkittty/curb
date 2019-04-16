import { connect } from "react-redux";
/* eslint-disable */
import ResetPassword2 from "./reset-password-2";
import { accountActions, accountSelectors } from "../../../../datas/account";
/* eslint-enable */
import { appModalActions } from "../../../../datas/app-modal";

const mapStateToProps = state => ({
  isAccountFetching: accountSelectors.isAccountFetching(state) || false
});

const mapDispatchToProps = dispatch => ({
  validateCode: payload => dispatch(accountActions.validateCodeRequest(payload)),
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
