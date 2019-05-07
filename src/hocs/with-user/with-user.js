import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";
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
    const { pathname } = ownProps.location;
    const userId =
      ownProps.userId || ((matchPath(pathname, { path: "/users/:id" }) || {}).params || {}).id || "";
    const {
      isFetching: isFetchingUser = false,
      dateCreation: userDateCreation = "",
      name: userName = "",
      avatarUrl: userAvatar = "",
      groups: userGroupsId = [],
      errorCode: userErrorCode = ""
    } = usersSelectors.getUserById(state, userId) || {};
    return {
      isFetchingUser,
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
    location: PropTypes.object.isRequired, // eslint-disable-line
    userId: PropTypes.string.isRequired,
    getUser: PropTypes.func.isRequired
  };

  return _.flowRight([
    // eslint-disable-line
    withRouter,
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  ])(WithUser);
};

export default withUser;
