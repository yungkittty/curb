import { connect } from "react-redux";
/* eslint-disable-next-line */
import CreateGroup4 from "./create-group-4";
import { appModalActions } from "../../../../datas/app-modal";
import { groupsActions } from "../../../../datas/groups";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderSteps: payload => dispatch(appModalActions.setAppModalHeaderSteps(payload)),
  setAppModalHeaderLeftButton: payload => dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalHeaderRightButton: payload => dispatch(appModalActions.setAppModalHeaderRightButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload => dispatch(appModalActions.setAppModalSceneData(payload)),
  setAppModalFooterButton: payload => dispatch(appModalActions.setAppModalFooterButton(payload)),
  postGroup: payload => dispatch(groupsActions.postGroupRequest(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateGroup4);
