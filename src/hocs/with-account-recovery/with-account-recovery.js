import { connect } from "react-redux";
/* eslint-disable */
import accountRecoveryActions from "../../datas/account-recovery/account-recovery-actions";
import accountRecoverySelectors from "../../datas/account-recovery/account-recovery-selectors";
/* eslint-enable */

const withAccountRecovery = WrappedComponent => {
  const mapStateToProps = state => ({
    isFetchingAccountRecovery: accountRecoverySelectors.isFetchingAccountRecovery(state),
    accountRecoveryErrorCode: accountRecoverySelectors.getAccountRecoveryErrorCode(state)
  });

  const mapDispatchToProps = dispatch => ({
    postAccountRecoveryEmail: payload =>
      dispatch(accountRecoveryActions.postAccountRecoveryEmailRequest(payload)),
    postAccountRecoveryPasswordCode: payload =>
      dispatch(accountRecoveryActions.postAccountRecoveryPasswordCodeRequest(payload)),
    postAccountRecoveryPassword: payload =>
      dispatch(accountRecoveryActions.postAccountRecoveryPasswordRequest(payload))
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withAccountRecovery;
