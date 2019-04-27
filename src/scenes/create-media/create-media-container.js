import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";
import CreateMedia from "./create-media";
import { appModalActions } from "../../datas/app-modal";

const mapStateToProps = (state, ownProps) => {
  const { pathname } = ownProps.location;
  const { id: groupId } = matchPath(pathname, {
    path: "/groups/:id"
  }).params;
  return { groupId };
};

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateMedia)
);
