import React from "react";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";
import GroupQr from "./group-qr";
import { appModalActions } from "../../../../../../datas/app-modal";
import { groupsSelectors } from "../../../../../../datas/groups";

class GroupQrContainer extends React.Component {
  componentDidMount() {}

  render() {
    return <GroupQr {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { pathname } = ownProps.location;
  const {
    id: currentGroupId = matchPath(pathname, { path: "/:id" }).params
  } = {};
  const {
    name: currentGroupName,
    avatarUrl: currentGroupAvatarUrl,
    status: currentGroupStatus
  } = groupsSelectors.getGroupById(state, currentGroupId);
  return {
    currentGroupId,
    currentGroupName,
    currentGroupAvatarUrl,
    currentGroupStatus
  };
};

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload =>
    dispatch(appModalActions.setAppModalHeaderText(payload))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GroupQrContainer)
);
