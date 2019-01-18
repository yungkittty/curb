import { connect } from "react-redux";
import SignUp1 from "./sign-up-1";
import { currentUserSelectors } from "../../../../datas/current-user";

const mapStateToProps = state => {
  const currentUserToken = currentUserSelectors.getCurrentUserToken(state);
  return {
    currentUserToken
  };
};

export default connect(
  mapStateToProps,
  null
)(SignUp1);
