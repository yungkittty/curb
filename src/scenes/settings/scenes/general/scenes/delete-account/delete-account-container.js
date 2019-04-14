import { connect } from "react-redux";
/* eslint-disable-next-line */
import DeleteAccount from "./delete-account";
import { signUpSelectors, signUpActions } from "../../../../../../datas/sign-up";
import { appModalActions } from "../../../../../../datas/app-modal";

const mapStateToProps = state => ({
  isSignUpFetching: signUpSelectors.isSignUpFetching(state)
});

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalHeaderLeftButton: payload => dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalFooterButton: payload => dispatch(appModalActions.setAppModalFooterButton(payload)),
  deleteAccount: payload => dispatch(signUpActions.deleteAccountRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteAccount);
