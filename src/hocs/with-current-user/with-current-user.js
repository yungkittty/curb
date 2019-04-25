import _ from "lodash";
import { connect } from "react-redux";
import { currentUserSelectors } from "../../datas/current-user";
import withUser from "../with-user";

const withCurrentUser = WrappedComponent => {
  const mapStateToProps = state => ({
    userId: currentUserSelectors.getCurrentUserId(state) || ""
  });

  return _.flow([
    // eslint-disable-line
    withUser,
    connect(mapStateToProps)
  ])(WrappedComponent);
};

export default withCurrentUser;
