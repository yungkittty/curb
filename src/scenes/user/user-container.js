import { connect } from "react-redux";
import User from "./user";
import { currentUserSelectors } from "../../datas/current-user";
import { usersActions, usersSelectors } from "../../datas/users";
import { mediasActions, mediasSelectors } from "../../datas/medias";

const mapStateToProps = (state, props) => {
  const {
    match: {
      params: { id }
    }
  } = props;
  const currentUserId = currentUserSelectors.getCurrentUserId(state);
  const isUserPatching = usersSelectors.isUserPatching(state) || false;
  const userPatchingErrorCode = usersSelectors.getUserPatchingErrorCode(state) || "";
  const isFetchingMedias = mediasSelectors.isFetchingMedias(state) || false;
  const mediasErrorCode = mediasSelectors.getMediasErrorCode(state) || "";
  return {
    owner: currentUserId === id,
    userId: id,
    isUserPatching,
    userPatchingErrorCode,
    isFetchingMedias,
    mediasErrorCode
  };
};

const mapDispatchToProps = dispatch => ({
  patchUser: payload => dispatch(usersActions.patchUserRequest(payload)),
  postMediaAvatar: payload => dispatch(mediasActions.postMediaAvatarRequest(payload)) || ""
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
