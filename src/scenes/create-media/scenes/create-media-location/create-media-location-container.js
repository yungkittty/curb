import { connect } from "react-redux";
/* eslint-disable-next-line */
import CreateMediaLocation from "./create-media-location";
import { appModalActions } from "../../../../datas/app-modal";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalHeaderLeftButton: payload => dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(CreateMediaLocation);
