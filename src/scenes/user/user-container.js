import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// eslint-disable-next-line
import User from "./user";
import { currentUserSelectors } from "../../datas/current-user";
import { usersActions, usersSelectors } from "../../datas/users";

class UserContainer extends React.Component {
  componentDidMount() {
    const { currentUserId, currentUserToken, getCurrentUser } = this.props;
    if (currentUserToken) {
      getCurrentUser({ id: currentUserId });
    }
  }

  componentDidUpdate(prevProps) {
    const { currentUserId, currentUserToken, getCurrentUser } = this.props;
    if (currentUserToken && currentUserToken !== prevProps.currentUserToken) {
      getCurrentUser({ id: currentUserId });
    }
  }

  render() {
    const { getCurrentUser, ...others } = this.props;
    return <User {...others} />;
  }
}

const mapStateToProps = state => {
  const currentUserId = currentUserSelectors.getCurrentUserId(state);
  const { avatarUrl = "", name: username = "" } =
    usersSelectors.getUserById(state, currentUserId) || {};
  return {
    currentUserId,
    username,
    avatarUrl
  };
};

const mapDispatchToProps = dispatch => ({
  getCurrentUser: payload => dispatch(usersActions.getUserRequest(payload)),
  patchCurrentUser: payload => dispatch(usersActions.patchUserRequest(payload))
});

UserContainer.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  currentUserToken: PropTypes.string.isRequired,
  getCurrentUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
