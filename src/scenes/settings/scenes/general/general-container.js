import { connect } from "react-redux";
import General from "./general";
import { signInActions } from "../../../../datas/sign-in";

const mapDispatchToProps = dispatch => ({
  signOut: payload => dispatch(signInActions.signOutRequest(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(General);
