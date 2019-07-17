import { connect } from "react-redux";
// eslint-disable-next-line
import SignIn from "./sign-in";
import { signInActions, signInSelectors } from "../../datas/sign-in";

const mapStateToProps = state => ({
  isFetchingSignIn: signInSelectors.isFetchingSignIn(state)
});

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signInActions.signInRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
