import { connect } from "react-redux";
import Group from "./group";
import { appModalActions } from "../../datas/app-modal";

const mapDispatchToProps = dispatch => ({
  showAppModal: payload => dispatch(appModalActions.showAppModal(payload)),
  setAppModalSceneData: payload => dispatch(appModalActions.setAppModalSceneData(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Group);
