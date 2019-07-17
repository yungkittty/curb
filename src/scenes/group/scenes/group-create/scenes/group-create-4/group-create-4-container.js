import { connect } from "react-redux";
import GroupCreate4 from "./group-create-4"; // eslint-disable-line
import { groupsActions, groupsSelectors } from "../../../../../../datas/groups";

const mapStateToProps = state => ({
  isFetchingGroups: groupsSelectors.isFetchingGroups(state) || false
});

const mapDispatchToProps = dispatch => ({
  postGroup: payload => dispatch(groupsActions.postGroupRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupCreate4);
