import { connect } from "react-redux";
/* eslint-disable-next-line */
import DeleteAccount from "./delete-account";
import { signUpActions } from "../../../../../../datas/sign-up";

const mapDispatchToProps = dispatch => ({
  deleteAccount: payload =>
    dispatch(signUpActions.deleteAccountRequest(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteAccount);
