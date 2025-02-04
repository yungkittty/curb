import { connect } from "react-redux";
/* eslint-disable-next-line */
import SettingsGeneral from "./settings-general";
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
)(SettingsGeneral);
