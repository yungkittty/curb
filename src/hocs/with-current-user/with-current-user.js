import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { currentUserSelectors } from "../../datas/current-user";
import { usersActions, usersSelectors } from "../../datas/users";

const withCurrentUser = WrappedComponent => {
  class WithCurrentUser extends React.Component {
    componentDidMount() {
      const {
        // eslint-disable-line
        shouldFetch,
        isFetchingCurrentUser,
        currentUserId,
        getUser
      } = this.props;
      if (shouldFetch && !isFetchingCurrentUser && currentUserId) {
        getUser({ id: currentUserId });
      }
    }

    componentDidUpdate(prevProps) {
      const {
        // eslint-disable-line
        shouldFetch,
        isFetchingCurrentUser,
        currentUserId,
        getUser
      } = this.props;
      if (shouldFetch && !isFetchingCurrentUser && currentUserId && currentUserId !== prevProps.currentUserId) {
        getUser({ id: currentUserId || currentUserId });
      }
    }

    render() {
      const { getUser, ...others } = this.props;
      return <WrappedComponent {...others} />;
    }
  }

  const mapStateToProps = state => {
    const currentUserId = currentUserSelectors.getCurrentUserId(state);
    if (!currentUserId) return {};
    const currentUser = usersSelectors.getUserById(state, currentUserId);
    if (!currentUser) return { currentUserId };
    const {
      isFetching: isFetchingCurrentUser,
      dateCreation: currentUserDateCreation,
      name: currentUserName,
      avatarUrl: currentUserAvatar,
      groups: currentUserGroupsId,
      errorCode: currentUserErrorCode
    } = currentUser;
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

  WithCurrentUser.defaultProps = {
    shouldFetch: true,
    isFetchingCurrentUser: false,
    currentUserId: "",
    currentUserDateCreation: "",
    currentUserName: "",
    currentUserAvatar: "",
    currentUserGroupsId: [],
    currentUserErrorCode: ""
  };

  WithCurrentUser.propTypes = {
    shouldFetch: PropTypes.bool,
    isFetchingCurrentUser: PropTypes.bool,
    currentUserId: PropTypes.string,
    currentUserDateCreation: PropTypes.string,
    currentUserName: PropTypes.string,
    currentUserAvatar: PropTypes.string,
    currentUserGroupsId: PropTypes.array, // eslint-disable-line
    currentUserErrorCode: PropTypes.string,
    getUser: PropTypes.func.isRequired
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithCurrentUser);
};

export default withCurrentUser;
