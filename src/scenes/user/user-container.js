import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// eslint-disable-next-line
import User from "./user";
import { currentUserSelectors } from "../../datas/current-user";
import { usersActions, usersSelectors } from "../../datas/users";

class UserContainer extends React.Component {
  componentDidMount() {
    const {
      getUser,
      match: {
        params: { id }
      }
    } = this.props;
    getUser({ id });
  }

  render() {
    const { getUser, ...others } = this.props;
    return <User {...others} />;
  }
}

const mapStateToProps = (state, props) => {
  const {
    match: {
      params: { id }
    }
  } = props;
  const currentUserId = currentUserSelectors.getCurrentUserId(state);
  const { avatarUrl = "", name: username = "" } =
    usersSelectors.getUserById(state, id) || {};
  return {
    owner: currentUserId === id,
    username,
    avatarUrl
  };
};

const mapDispatchToProps = dispatch => ({
  getUser: payload => dispatch(usersActions.getUserRequest(payload)),
  patchCurrentUser: payload => dispatch(usersActions.patchUserRequest(payload)),
  postUserAvatar: payload =>
    dispatch(usersActions.postUserAvatarRequest(payload))
});

UserContainer.propTypes = {
  getUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
