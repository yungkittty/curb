import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { currentUserSelectors } from "../../datas/current-user";
import { usersActions, usersSelectors } from "../../datas/users";

const withCurrentUser = WrappedComponent => {
  class WithCurrentUser extends React.Component {
    componentDidMount() {
      const { currentUserId, getUser } = this.props;
      if (currentUserId) {
        getUser({ id: currentUserId });
      }
    }

    componentDidUpdate(prevProps) {
      const { currentUserId, getUser } = this.props;
      if (currentUserId && currentUserId !== prevProps.currentUserId) {
        getUser({ id: currentUserId || currentUserId });
      }
    }

    render() {
      const { getUser, ...others } = this.props;
      return <WrappedComponent {...others} />;
    }
  }

  const mapStateToProps = state => {
    const currentUserId = currentUserSelectors.getCurrentUserId(state) || "";
    const {
      isFetching: isFetchingCurrentUser = false,
      dateCreation: currentUserDateCreation = "",
      name: currentUserName = "",
      avatarUrl: currentUserAvatar = "",
      groups: currentUserGroupsId = [],
      errorCode: currentUserErrorCode = ""
    } = usersSelectors.getUserById(state, currentUserId) || {};
    return {
      isFetchingCurrentUser,
      currentUserId,
      currentUserDateCreation,
      currentUserName,
      currentUserAvatar,
      currentUserGroupsId,
      currentUserErrorCode
    };
  };

  const mapDispatchToProps = dispatch => ({
    getUser: payload => dispatch(usersActions.getUserRequest(payload))
  });

  WithCurrentUser.propTypes = {
    currentUserId: PropTypes.string.isRequired,
    getUser: PropTypes.func.isRequired
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithCurrentUser);
};

export default withCurrentUser;
