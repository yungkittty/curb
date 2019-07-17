import { connect } from "react-redux";
// eslint-disable-next-line
import SignUp2 from "./sign-up-2";
import { signUpActions, signUpSelectors } from "../../../../datas/sign-up";

const mapStateToProps = state => ({
  isFetchingSignUp: signUpSelectors.isFetchingSignUp(state)
});

const mapDispatchToProps = dispatch => ({
  signUp: payload => dispatch(signUpActions.signUpRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp2);
