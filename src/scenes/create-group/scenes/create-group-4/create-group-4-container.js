import { connect } from "react-redux";
import CreateGroup4 from "./create-group-4";
import { signUpActions } from "../../../../datas/sign-up";

const mapDispatchToProps = dispatch => ({
  signUp: payload => dispatch(signUpActions.signUpRequest(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateGroup4);
