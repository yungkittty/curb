import { connect } from "react-redux";
/* eslint-disable-next-line */
import CreateGroup4 from "./create-group-4";
import { groupsActions, groupsSelectors } from "../../../../datas/groups";

const mapStateToProps = state => ({
  isFetchingGroups: groupsSelectors.isFetchingGroups(state) || false
});

const mapDispatchToProps = dispatch => ({
  postGroup: payload => dispatch(groupsActions.postGroupRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroup4);
