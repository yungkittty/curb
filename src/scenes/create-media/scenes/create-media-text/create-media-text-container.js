import { connect } from "react-redux";
/* eslint-disable-next-line */
import CreateMediaText from "./create-media-text";
import { currentUserSelectors } from "../../../../datas/current-user";
import { appModalActions } from "../../../../datas/app-modal";
import { groupsActions, groupsSelectors } from "../../../../datas/groups";
import { mediasActions, mediasSelectors } from "../../../../datas/medias";

const mapStateToProps = state => {
  const currentUserId = currentUserSelectors.getCurrentUserId(state);
  const currentGroupId = groupsSelectors.getGroupById(state);

  return {
    currentUserId,
    currentGroupId
  };
};

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalHeaderSteps: payload =>
    dispatch(appModalActions.setAppModalHeaderSteps(payload)),
  setAppModalHeaderLeftButton: payload =>
    dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalHeaderRightButton: payload =>
    dispatch(appModalActions.setAppModalHeaderRightButton(payload)),
  setAppModalScene: payload =>
    dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload =>
    dispatch(appModalActions.setAppModalSceneData(payload)),
  setAppModalFooterButton: payload =>
    dispatch(appModalActions.setAppModalFooterButton(payload)),
  postGroupTextContent: payload => dispatch(mediasActions.postGroupTextContentRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMediaText);
