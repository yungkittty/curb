import { connect } from "react-redux";
import CreateMedia from "./create-media";
import { appModalActions } from "../../datas/app-modal";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateMedia);
