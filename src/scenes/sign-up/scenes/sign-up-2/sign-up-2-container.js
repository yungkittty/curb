import { connect } from "react-redux";
// eslint-disable-next-line
import SignUp2 from "./sign-up-2";
import { signUpActions } from "../../../../datas/sign-up";

const mapDispatchToProps = dispatch => ({
  signUp: payload => dispatch(signUpActions.signUpRequest(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SignUp2);
