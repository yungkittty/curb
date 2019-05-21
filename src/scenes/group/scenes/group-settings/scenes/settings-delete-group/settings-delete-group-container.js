import { connect } from "react-redux";
/* eslint-disable-next-line */
import SettingsDeleteGroup from "./settings-delete-group";
import { groupsSelectors, groupsActions } from "../../../../../../datas/groups";

const mapStateToProps = state => ({
  isFetchingGroups: groupsSelectors.isFetchingGroups(state) || false
});

const mapDispatchToProps = dispatch => ({
  deleteGroup: payload => dispatch(groupsActions.deleteGroupRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsDeleteGroup);
