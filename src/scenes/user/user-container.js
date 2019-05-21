import { connect } from "react-redux";
import User from "./user";
import { usersActions, usersSelectors } from "../../datas/users";
import { mediasSelectors } from "../../datas/medias";

const mapStateToProps = state => {
  const isFetchingUsers = usersSelectors.isFetchingUsers(state) || false;
  const usersErrorCode = usersSelectors.getUsersErrorCode(state) || "";
  const isFetchingMedias = mediasSelectors.isFetchingMedias(state) || false;
  const mediasErrorCode = mediasSelectors.getMediasErrorCode(state) || "";
  return {
    isFetchingUsers,
    usersErrorCode,
    isFetchingMedias,
    mediasErrorCode
  };
};

const mapDispatchToProps = dispatch => ({
  patchUser: payload => dispatch(usersActions.patchUserRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
