import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppNavigation from "./app-navigation";
import { appModalActions } from "../../datas/app-modal";
import { currentUserSelectors } from "../../datas/current-user";
import { usersActions, usersSelectors } from "../../datas/users";
import { signInActions } from "../../datas/sign-in"; // eslint-disable-line

class AppNavigationContainer extends React.Component {
  componentDidMount() {
    const { currentUserId, getCurrentUser } = this.props;
    if (currentUserId) getCurrentUser({ id: currentUserId });
  }

  componentDidUpdate(prevProps) {
    const { currentUserId, getCurrentUser } = this.props;
    if (currentUserId && currentUserId !== prevProps.currentUserId)
      getCurrentUser({ id: currentUserId });
  }

  render() {
    const { getCurrentUser, ...others } = this.props;
    return <AppNavigation {...others} />;
  }
}

const mapStateToProps = state => {
  const currentUserId = currentUserSelectors.getCurrentUserId(state);
  const { avatarUrl: currentUserAvatarUrl = "", groups: currentUserGroupsIds = [] } =
    usersSelectors.getUserById(state, currentUserId) || {};
  return {
    currentUserId,
    currentUserAvatarUrl,
    currentUserGroupsIds
  };
};

const mapDispatchToProps = dispatch => ({
  showAppModal: payload => dispatch(appModalActions.showAppModal(payload)),
  getCurrentUser: payload => dispatch(usersActions.getUserRequest(payload))
});

AppNavigationContainer.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  getCurrentUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigationContainer);
