import { connect } from "react-redux";
import SignIn from "./sign-in";
import { signInActions } from "../../datas/sign-in";

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signInActions.signInRequest(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
