import { connect } from "react-redux";
import SignUp2 from "./sign-up-2";
import { currentUserSelectors } from "../../../../datas/current-user";
import { signUpActions } from "../../../../datas/sign-up";

const mapStateToProps = state => {
  const currentUserToken = currentUserSelectors.getCurrentUserToken(state);
  return {
    currentUserToken
  };
};

const mapDispatchToProps = dispatch => ({
  signUp: payload => dispatch(signUpActions.signUpRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp2);
