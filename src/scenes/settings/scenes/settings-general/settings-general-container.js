import { connect } from "react-redux";
/* eslint-disable-next-line */
import SettingsGeneral from "./settings-general";
import { signInActions, signInSelectors } from "../../../../datas/sign-in";

const mapStateToProps = state => ({
  isFetchingSignIn: signInSelectors.isFetchingSignIn(state) || false
});

const mapDispatchToProps = dispatch => ({
  signOut: payload => dispatch(signInActions.signOutRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsGeneral);
