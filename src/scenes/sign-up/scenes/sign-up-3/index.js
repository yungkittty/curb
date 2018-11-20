import { connect } from "react-redux";
import signUpActions from "../../../../datas/sign-up/sign-up-actions";
import Signup3 from "./sign-up-3";

const mapDispatchToProps = dispatch => ({
  signUp: payload => dispatch(signUpActions.signUpRequest(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Signup3);
