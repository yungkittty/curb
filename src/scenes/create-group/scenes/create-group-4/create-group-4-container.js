import { connect } from "react-redux";
/* eslint-disable-next-line */
import CreateGroup4 from "./create-group-4";
import { currentUserSelectors } from "../../../../datas/current-user";
import { groupsActions } from "../../../../datas/groups";

const mapStateToProps = state => {
  const currentUserId = currentUserSelectors.getCurrentUserId(state);
  return {
    currentUserId
  };
};

const mapDispatchToProps = dispatch => ({
  postGroup: payload => dispatch(groupsActions.postGroupRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroup4);
