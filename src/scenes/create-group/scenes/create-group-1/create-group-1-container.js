import { connect } from "react-redux";
// eslint-disable-next-line
import CreateGroup1 from "./create-group-1";
import { appModalActions } from "../../../../datas/app-modal";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderSteps: payload =>
    dispatch(appModalActions.setAppModalHeaderSteps(payload)),
  setAppModalScene: payload =>
    dispatch(appModalActions.setAppModalScene(payload)),
  setAppModalSceneData: payload =>
    dispatch(appModalActions.setAppModalSceneData(payload)),
  setAppModalFooterButton: payload =>
    dispatch(appModalActions.setAppModalFooterButton(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(CreateGroup1);
