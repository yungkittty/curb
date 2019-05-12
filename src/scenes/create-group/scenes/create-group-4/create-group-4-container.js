import { connect } from "react-redux";
/* eslint-disable-next-line */
import CreateGroup4 from "./create-group-4";
import { appModalActions } from "../../../../datas/app-modal";
import { groupsSelectors, groupsActions } from "../../../../datas/groups";

const mapStateToProps = state => ({
  isCreateGroupFetching: groupsSelectors.isCreateGroupFetching(state) || false,
  createGroupErrorCode: groupsSelectors.getCreateGroupErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  enableAppModalButtons: () => dispatch(appModalActions.enableAppModalButtons()),
  disableAppModalButtons: () => dispatch(appModalActions.disableAppModalButtons()),
  setAppModalHeaderSteps: payload => dispatch(appModalActions.setAppModalHeaderSteps(payload)),
  setAppModalHeaderLeftButton: payload => dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload => dispatch(appModalActions.setAppModalSceneData(payload)),
  setAppModalFooterButton: payload => dispatch(appModalActions.setAppModalFooterButton(payload)),
  hideAppModal: () => dispatch(appModalActions.hideAppModal()),
  postGroup: payload => dispatch(groupsActions.postGroupRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroup4);
