import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";
import { usersActions, usersSelectors } from "../../datas/users";

const withUser = WrappedComponent => {
  class WithUser extends React.Component {
    componentDidMount() {
      const {
        // eslint-disable-line
        shouldFetch,
        userId,
        getUser
      } = this.props;
      if (shouldFetch && userId) {
        getUser({ id: userId });
      }
    }

    componentDidUpdate(prevProps) {
      const {
        // eslint-disable-line
        shouldFetch,
        userId,
        getUser
      } = this.props;
      if (shouldFetch && userId && userId !== prevProps.userId) {
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
    const userParamsId = ((matchPath(pathname, { path: "/users/:id" }) || {}).params || {}).id;
    const userId = ownProps.userId || userParamsId;
    const user = usersSelectors.getUserById(state, userId);
    if (!user) return { userId };
    const {
      dateCreation: userDateCreation,
      name: userName,
      avatarUrl: userAvatar,
      groups: userGroupsId,
      errorCode: userErrorCode
    } = user;
    return {
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

  WithUser.defaultProps = {
    shouldFetch: true,
    userId: "",
    userDateCreation: "",
    userName: "",
    userAvatar: "",
    userGroupsId: [],
    userErrorCode: ""
  };

  WithUser.propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line
    shouldFetch: PropTypes.bool,
    userId: PropTypes.string,
    userDateCreation: PropTypes.string,
    userName: PropTypes.string,
    userAvatar: PropTypes.string,
    userGroupsId: PropTypes.array, // eslint-disable-line
    userErrorCode: PropTypes.string,
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
