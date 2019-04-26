import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";
import GroupQr from "./group-qr";
import { appModalActions } from "../../../../datas/app-modal";
import { groupsActions, groupsSelectors } from "../../../../datas/groups";

class GroupQrContainer extends React.Component {
  componentDidMount() {
    const { currentGroupStatus, getGroupInviteToken, currentGroupId } = this.props;
    // eslint-disable-next-line
    currentGroupStatus === "private" && getGroupInviteToken({ id: currentGroupId });
  }

  render() {
    return <GroupQr {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { pathname } = ownProps.location;
  const { id: currentGroupId } = matchPath(pathname, {
    path: "/groups/:id"
  }).params;
  const {
    name: currentGroupName,
    avatarUrl: currentGroupAvatarUrl,
    status: currentGroupStatus,
    token: currentGrouptoken
  } = groupsSelectors.getGroupById(state, currentGroupId);
  return {
    currentGroupId,
    currentGroupName,
    currentGroupAvatarUrl,
    currentGroupStatus,
    currentGrouptoken
  };
};

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  getGroupInviteToken: payload => dispatch(groupsActions.getGroupInviteTokenRequest(payload))
});

GroupQrContainer.propTypes = {
  currentGroupStatus: PropTypes.string.isRequired,
  currentGroupId: PropTypes.string.isRequired,
  getGroupInviteToken: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GroupQrContainer)
);
