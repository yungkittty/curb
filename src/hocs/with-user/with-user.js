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
      if (userId && userId !== prevProps.userId) {
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
      isGetting: isGettingUser = false,
      dateCreation: userDateCreation = "",
      name: userName = "",
      avatarUrl: userAvatar = "",
      groups: userGroupsIds = [],
      errorCode: userErrorCode = ""
    } = usersSelectors.getUserById(state, userId) || {};
    return {
      isGettingUser,
      userId,
      userDateCreation,
      userName,
      userAvatar,
      userGroupsIds,
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
