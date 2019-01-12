import { connect } from "react-redux";
/* eslint-disable-next-line */
import General from "./general";
import { currentUserSelectors } from "../../../../datas/current-user";
import { signInActions } from "../../../../datas/sign-in";

const mapStateToProps = state => {
  const currentUserToken = currentUserSelectors.getCurrentUserToken(state);
  return {
    currentUserToken
  };
};

const mapDispatchToProps = dispatch => ({
  signOut: payload => dispatch(signInActions.signOutRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(General);
