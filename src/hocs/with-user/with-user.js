import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { usersActions, usersSelectors } from "../../datas/users";

const withUser = WrappedComponent => {
  class WithUser extends React.Component {
    componentDidMount() {
      const { userId, getUser } = this.props;
      if (userId) {
        getUser({ id: userId });
      }
    }

    componentDidUpdate(prevProps) {
      const { userId, getUser } = this.props;
      if (userId !== prevProps.userId) {
        getUser({ id: userId });
      }
    }

    render() {
      const { getUser, ...others } = this.props;
      return <WrappedComponent {...others} />;
    }
  }

  const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.userId || ((ownProps.match || {}).params || {}).id || "";
    const {
      isFetching: isUserFetching = true,
      dateCreation: userDateCreation = "",
      name: userName = "",
      avatarUrl: userAvatar = "",
      groups: userGroupsId = [],
      errorCode: userErrorCode = ""
    } = usersSelectors.getUserById(state, userId) || {};
    return {
      isUserFetching,
      userId,
      userDateCreation,
      userName,
      userAvatar,
      userGroupsId,
      userErrorCode
    };
  };

  const mapDispatchToProps = dispatch => ({
    getUser: payload => dispatch(usersActions.getUserRequest(payload))
  });

  WithUser.propTypes = {
    userId: PropTypes.string.isRequired,
    getUser: PropTypes.func.isRequired
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithUser);
};

export default withUser;
