import { connect } from "react-redux";
/* eslint-disable-next-line */
import SettingsModules from "./settings-modules";
import { groupsSelectors, groupsActions } from "../../../../../../datas/groups";

const mapStateToProps = state => ({
  isPatchGroupFetching: groupsSelectors.isCreateGroupFetching(state) || false,
  patchGroupErrorCode: groupsSelectors.getCreateGroupErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  patchGroup: payload => dispatch(groupsActions.patchGroupRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsModules);
