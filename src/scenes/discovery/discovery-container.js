import { connect } from "react-redux";
import Discovery from "./discovery";
import { discoverySelectors, discoveryActions } from "../../datas/discovery";

const mapStateToProps = state => ({
  isDiscoveryGlobalSectionEnd: discoverySelectors.isDiscoveryGlobalSectionEnd(state),
  isDiscoveryCustomSectionEnd: discoverySelectors.isDiscoveryCustomSectionEnd(state),
  isDiscoveryRandomSectionEnd: discoverySelectors.isDiscoveryRandomSectionEnd(state),
  discoveryGlobalSectionGroupsId: discoverySelectors.getDiscoveryGlobalSectionGroupsId(state),
  discoveryCustomSectionGroupsId: discoverySelectors.getDiscoveryCustomSectionGroupsId(state),
  discoveryRandomSectionGroupsId: discoverySelectors.getDiscoveryRandomSectionGroupsId(state)
});

const mapDispatchToProps = dispatch => ({
  getDiscoveryGlobalSectionGroupsId: payload =>
    dispatch(discoveryActions.getDiscoveryGlobalSectionGroupsIdRequest(payload)),
  getDiscoveryCustomSectionGroupsId: payload =>
    dispatch(discoveryActions.getDiscoveryCustomSectionGroupsIdRequest(payload)),
  getDiscoveryRandomSectionGroupsId: payload =>
    dispatch(discoveryActions.getDiscoveryRandomSectionGroupsIdRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discovery);
