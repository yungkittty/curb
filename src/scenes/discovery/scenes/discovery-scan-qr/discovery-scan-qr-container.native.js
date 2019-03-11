import { connect } from "react-redux";
import DiscoveryScanQr from "./discovery-scan-qr.native";
import { appModalActions } from "../../../../datas/app-modal";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload =>
    dispatch(appModalActions.setAppModalHeaderText(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(DiscoveryScanQr);
