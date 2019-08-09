import { connect } from "react-redux";
import HeaderButton from "./header-button";
import { groupsActions } from "../../../../../../datas/groups";

const mapDispatchToProps = dispatch => ({
  postGroupJoin: payload => dispatch(groupsActions.postGroupJoinRequest(payload)),
  postGroupUnjoin: payload => dispatch(groupsActions.postGroupUnjoinRequest(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(HeaderButton);
