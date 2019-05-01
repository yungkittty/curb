import { connect } from "react-redux";
/* eslint-disable-next-line */
import SettingsGeneral from "./settings-general";
import { currentUserSelectors } from "../../../../datas/current-user";
import { signInActions, signInSelectors } from "../../../../datas/sign-in";
import { appModalActions } from "../../../../datas/app-modal";

const mapStateToProps = state => ({
  currentUserId: currentUserSelectors.getCurrentUserId(state) || "",
  isSignOutFetching: signInSelectors.isSignInFetching(state) || false
});

const mapDispatchToProps = dispatch => ({
  enableAppModalButtons: () => dispatch(appModalActions.enableAppModalButtons()),
  disableAppModalButtons: () => dispatch(appModalActions.disableAppModalButtons()),
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalHeaderLeftButton: payload => dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
  signOut: payload => dispatch(signInActions.signOutRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsGeneral);
