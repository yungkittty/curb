import { connect } from "react-redux";
/* eslint-disable-next-line */
import Language from "./language";
import { signInActions } from "../../../../../../datas/sign-in";
import { appModalActions } from "../../../../../../datas/app-modal";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload =>
    dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalHeaderLeftButton: payload =>
    dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalScene: payload =>
    dispatch(appModalActions.setAppModalScene(payload)),
  signOut: payload => dispatch(signInActions.signOutRequest(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(Language);
