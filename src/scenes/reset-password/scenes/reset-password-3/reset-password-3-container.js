import { connect } from "react-redux";
/* eslint-disable */
import ResetPassword3 from "./reset-password-3";
import { accountActions, accountSelectors } from "../../../../datas/account";
/* eslint-enable */
import { appModalActions } from "../../../../datas/app-modal";

const mapStateToProps = state => ({
  isAccountFetching: accountSelectors.isAccountFetching(state) || false
});

const mapDispatchToProps = dispatch => ({
  resetPass: payload => dispatch(accountActions.resetPassRequest(payload)),
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
