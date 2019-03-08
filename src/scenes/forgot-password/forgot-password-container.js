import { connect } from "react-redux";
import ForgotPassword from "./forgot-password";
import { signInActions } from "../../datas/sign-in";

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signInActions.signInRequest(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(ForgotPassword);
