import { connect } from "react-redux";
import GroupListSectionHeader from "./group-list-section-header";
import { groupsActions, groupsSelectors } from "../../../../datas/groups";

const mapStateToProps = state => ({
  isFetchingGroups: groupsSelectors.isFetchingGroups(state) || false
});

const mapDispatchToProps = dispatch => ({
  postGroupInviteToken: payload => dispatch(groupsActions.postGroupInviteTokenRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupListSectionHeader);
