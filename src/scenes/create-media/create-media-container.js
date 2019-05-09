import { connect } from "react-redux";
import { withRouter } from "react-router";
import CreateMedia from "./create-media";
import { appModalActions } from "../../datas/app-modal";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(CreateMedia)
);
