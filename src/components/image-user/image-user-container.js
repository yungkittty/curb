import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageUser from "./image-user";
import { usersActions, usersSelectors } from "../../datas/users";

class ImageUserContainer extends React.Component {
  componentDidMount() {
    const { hasBeenFetched, userId, getUser } = this.props;
    if (!hasBeenFetched && userId) {
      getUser({ id: userId });
    }
  }

  render() {
    const { userId, getUser, ...others } = this.props;
    return <ImageUser {...others} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    isFetching: isUserFetching = ownProps.isUserFetching && true,
    id: userId = ownProps.userId || "",
    avatarUrl: userAvatarUrl = ownProps.userAvatarUrl || "" // eslint-disable-line
  } = usersSelectors.getUserById(state, ownProps.userId) || {};
  return {
    isUserFetching,
    userId,
    userAvatarUrl
  };
};

const mapDispatchToProps = dispatch => ({
  getUser: payload => dispatch(usersActions.getUserRequest(payload))
});

ImageUserContainer.defaultProps = { isUserFetching: true };

ImageUserContainer.propTypes = {
  hasBeenFetched: PropTypes.bool.isRequired,
  isUserFetching: PropTypes.bool,
  userId: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUserContainer);
