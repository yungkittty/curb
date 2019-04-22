import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// eslint-disable-next-line
import User from "./user";
import { currentUserSelectors } from "../../datas/current-user";
import { usersActions, usersSelectors } from "../../datas/users";
import { mediasActions, mediasSelectors } from "../../datas/medias";
import { appAlertActions } from "../../datas/app-alert";

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
  const { avatarUrl = "", name: username = "" } = usersSelectors.getUserById(state, id) || {};
  const currentUserId = currentUserSelectors.getCurrentUserId(state);
  const isMediasPosting = mediasSelectors.isMediasPosting(state) || false;
  return {
    owner: currentUserId === id,
    username,
    avatarUrl,
    isMediasPosting
  };
};

const mapDispatchToProps = dispatch => ({
  getUser: payload => dispatch(usersActions.getUserRequest(payload)),
  pushAppAlert: payload => dispatch(appAlertActions.pushAppAlert(payload)),
  patchCurrentUser: payload => dispatch(usersActions.patchUserRequest(payload)),
  postMediaUserAvatar: payload => dispatch(mediasActions.postMediaUserAvatarRequest(payload))
});

UserContainer.propTypes = {
  match: PropTypes.shape({
    params: { id: PropTypes.string.isRequired }.isRequired
  }).isRequired,
  getUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
