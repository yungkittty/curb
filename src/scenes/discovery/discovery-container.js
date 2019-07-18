import { connect } from "react-redux";
import Discovery from "./discovery";
import { discoverySelectors, discoveryActions } from "../../datas/discovery";

const mapStateToProps = state => ({
  discGlobalSectionGrpsId: discoverySelectors.getDiscoveryGlobalSectionGroupsId(state),
  discCustomSectionGrpsId: discoverySelectors.getDiscoveryCustomSectionGroupsId(state),
  discRandomSectionGrpsId: discoverySelectors.getDiscoveryRandomSectionGroupsId(state)
});

const mapDispatchToProps = dispatch => ({
  getDiscGlobalSectionGrps: payload =>
    dispatch(discoveryActions.getDiscoveryGlobalSectionGroupsRequest(payload)),
  getDiscCustomSectionGrps: payload =>
    dispatch(discoveryActions.getDiscoveryCustomSectionGroupsRequest(payload)),
  getDiscRandomSectionGrps: payload =>
    dispatch(discoveryActions.getDiscoveryRandomSectionGroupsRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discovery);
