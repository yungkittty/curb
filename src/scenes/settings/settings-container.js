import { connect } from "react-redux";
// eslint-disable-next-line
import Settings from "./settings";
import { appModalActions } from "../../datas/app-modal";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload =>
    dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalScene: payload =>
    dispatch(appModalActions.setAppModalScene(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Settings);
