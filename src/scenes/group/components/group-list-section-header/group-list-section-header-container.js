import { connect } from "react-redux";
import GroupListSectionHeader from "./group-list-section-header";
import { groupsActions } from "../../../../datas/groups";

const mapDispatchToProps = dispatch => ({
  postGroupInviteToken: payload => dispatch(groupsActions.postGroupInviteTokenRequest(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(GroupListSectionHeader);
