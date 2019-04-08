import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageUser from "./image-user";
import { usersActions, usersSelectors } from "../../datas/users";

class ImageUserContainer extends React.Component {
  componentDidMount() {
    const { userId, getUser } = this.props;
    if (userId) {
      getUser({ id: userId });
    }
  }

  render() {
    const { userId, getUser, ...others } = this.props;
    return <ImageUser {...others} />;
  }
}

const mapStateToProps = (state, { userId }) => {
  const { isFetching: isUserFetching = true, name: userName = "", avatarUrl: userAvatarUrl = "" } =
    usersSelectors.getUserById(state, userId) || {};
  return {
    isUserFetching,
    userId,
    userName,
    userAvatarUrl
  };
};

const mapDispatchToProps = dispatch => ({
  getUser: payload => dispatch(usersActions.getUserRequest(payload))
});

ImageUserContainer.propTypes = {
  userId: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUserContainer);
