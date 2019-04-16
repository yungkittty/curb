import { connect } from "react-redux";
// eslint-disable-next-line
import PostSelect from "./post-select";
import { appModalActions } from "../../../../datas/app-modal";
import { groupsActions, groupsSelectors } from "../../../../datas/groups";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderSteps: payload =>
    dispatch(appModalActions.setAppModalHeaderSteps(payload)),
  setAppModalScene: payload =>
    dispatch(appModalActions.setAppModalScene(payload)),

});

export default connect(
  undefined,
  mapDispatchToProps
)(PostSelect);
