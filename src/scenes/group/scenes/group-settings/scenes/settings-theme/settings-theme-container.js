import { connect } from "react-redux";
/* eslint-disable-next-line */
import SettingsTheme from "./settings-theme";
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
)(SettingsTheme);
