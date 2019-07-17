import { connect } from "react-redux";
/* eslint-disable-next-line */
import SettingsModules from "./settings-modules";
import { groupsSelectors, groupsActions } from "../../../../../../datas/groups";

const mapStateToProps = state => ({
  isFetchingGroups: groupsSelectors.isFetchingGroups(state) || false
});

const mapDispatchToProps = dispatch => ({
  patchGroup: payload => dispatch(groupsActions.patchGroupRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsModules);
