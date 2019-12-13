import { connect } from "react-redux";
import User from "./user";
import { usersActions, usersSelectors } from "../../datas/users";

const mapStateToProps = state => {
  const isFetchingUsers = usersSelectors.isFetchingUsers(state) || false;
  const usersErrorCode = usersSelectors.getUsersErrorCode(state) || "";
  return {
    isFetchingUsers,
    usersErrorCode
  };
};

const mapDispatchToProps = dispatch => ({
  patchUser: payload => dispatch(usersActions.patchUserRequest(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
