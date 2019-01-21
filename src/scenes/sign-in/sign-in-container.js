import { connect } from "react-redux";
import SignIn from "./sign-in";
import { currentUserSelectors } from "../../datas/current-user";
import { signInActions } from "../../datas/sign-in";

const mapStateToProps = state => {
  const currentUserToken = currentUserSelectors.getCurrentUserToken(state);
  return {
    currentUserToken
  };
};

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(signInActions.signInRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
