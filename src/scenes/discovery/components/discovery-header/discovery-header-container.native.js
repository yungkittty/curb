import { connect } from "react-redux";
import DiscoveryHeader from "./discovery-header";
import { appModalActions } from "../../../../datas/app-modal";

const mapDispatchToProps = dispatch => ({
  showAppModal: payload => dispatch(appModalActions.showAppModal(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(DiscoveryHeader);
