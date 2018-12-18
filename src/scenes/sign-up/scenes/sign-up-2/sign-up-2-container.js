import { connect } from "react-redux";
import SignUp2 from "./sign-up-2";
import { signUpActions } from "../../../../datas/sign-up";

const mapDispatchToProps = dispatch => ({
  signUp: payload => dispatch(signUpActions.signUpRequest(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp2);
