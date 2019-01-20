import { connect } from "react-redux";
/* eslint-disable-next-line */
import DeleteAccount from "./delete-account";
import { currentUserSelectors } from "../../../../../../datas/current-user";
import { signUpActions } from "../../../../../../datas/sign-up";

const mapStateToProps = state => {
  const currentUserToken = currentUserSelectors.getCurrentUserToken(state);
  return {
    currentUserToken
  };
};

const mapDispatchToProps = dispatch => ({
  deleteAccount: payload =>
    dispatch(signUpActions.deleteAccountRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteAccount);
