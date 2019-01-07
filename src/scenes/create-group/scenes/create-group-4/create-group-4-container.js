import { connect } from "react-redux";
import CreateGroup4 from "./create-group-4";
import { groupsActions } from "../../../../datas/groups";

const mapDispatchToProps = dispatch => ({
  postGroup: payload => dispatch(groupsActions.postGroupRequest(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateGroup4);
