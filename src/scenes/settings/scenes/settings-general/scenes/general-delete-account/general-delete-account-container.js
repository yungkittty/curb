import { connect } from "react-redux";
// eslint-disable-next-line
import GeneralDeleteAccount from "./general-delete-account";
import { accountActions, accountSelectors } from "../../../../../../datas/account";

const mapStateToProps = state => ({
  isFetchingAccount: accountSelectors.isFetchingAccount(state) || false
});

const mapDispatchToProps = dispatch => ({
  deleteAccount: payload => dispatch(accountActions.deleteAccountRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralDeleteAccount);
