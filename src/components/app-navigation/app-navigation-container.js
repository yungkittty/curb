import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppNavigation from "./app-navigation";
import { currentUserSelectors } from "../../datas/current-user";
import { usersActions, usersSelectors } from "../../datas/users";

class AppNavigationContainer extends React.Component {
  componentDidMount() {
    const { currentUserId, currentUserToken, getCurrentUser } = this.props;
    if (currentUserId && currentUserToken) getCurrentUser({ id: currentUserId });
  }

  render() {
    const { getCurrentUser, ...others } = this.props;
    return <AppNavigation {...others} />;
  }
}

const mapStateToProps = state => {
  const currentUserId = currentUserSelectors.getCurrentUserId(state);
  const currentUserToken = currentUserSelectors.getCurrentUserToken(state);
  const { avatarUrl: currentUserAvatarUrl = "", groups: currentUserGroupsIds = [] } =
    usersSelectors.getUserById(state, currentUserId) || {};
  return {
    currentUserId,
    currentUserToken,
    currentUserAvatarUrl,
    currentUserGroupsIds
  };
};

const mapDispatchToProps = dispatch => ({
  getCurrentUser: payload =>
    dispatch(usersActions.getUserRequest(payload))
});

AppNavigationContainer.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  currentUserToken: PropTypes.string.isRequired,
  getCurrentUser: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigationContainer);
