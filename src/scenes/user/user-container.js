import { connect } from "react-redux";
import User from "./user";
import { currentUserSelectors } from "../../datas/current-user";
import { usersActions, usersSelectors } from "../../datas/users";
import { mediasActions, mediasSelectors } from "../../datas/medias";
import { appAlertActions } from "../../datas/app-alert";

const mapStateToProps = (state, props) => {
  const {
    match: {
      params: { id }
    }
  } = props;
  const currentUserId = currentUserSelectors.getCurrentUserId(state);
  const isUserPatching = usersSelectors.isUserPatching(state) || false;
  const userPatchingErrorCode = usersSelectors.getUserPatchingErrorCode(state) || "";
  const isMediasPosting = mediasSelectors.isMediasPosting(state) || false;
  const mediasPostingErrorCode = mediasSelectors.getMediasPostingErrorCode(state) || "";
  return {
    owner: currentUserId === id,
    userId: id,
    isUserPatching,
    userPatchingErrorCode,
    isMediasPosting,
    mediasPostingErrorCode
  };
};

const mapDispatchToProps = dispatch => ({
  pushAppAlert: payload => dispatch(appAlertActions.pushAppAlert(payload)),
  patchUser: payload => dispatch(usersActions.patchUserRequest(payload)),
  postMediaAvatar: payload => dispatch(mediasActions.postMediaAvatarRequest(payload)) || ""
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
