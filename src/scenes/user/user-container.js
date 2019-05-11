import { connect } from "react-redux";
import User from "./user";
import { usersActions, usersSelectors } from "../../datas/users";
import { mediasActions, mediasSelectors } from "../../datas/medias";

const mapStateToProps = state => {
  const isUserPatching = usersSelectors.isFetchingUsers(state) || false;
  const usersErrorCode = usersSelectors.getUsersErrorCode(state) || "";
  const isFetchingMedias = mediasSelectors.isFetchingMedias(state) || false;
  const mediasErrorCode = mediasSelectors.getMediasErrorCode(state) || "";
  return {
    isUserPatching,
    usersErrorCode,
    isFetchingMedias,
    mediasErrorCode
  };
};

const mapDispatchToProps = dispatch => ({
  patchUser: payload => dispatch(usersActions.patchUserRequest(payload)),
  postMediaAvatarUser: payload => dispatch(mediasActions.postMediaAvatarUserRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
