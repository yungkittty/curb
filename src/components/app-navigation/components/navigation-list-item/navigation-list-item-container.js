import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavigationListItem from "./navigation-list-item";
import { groupsActions, groupsSelectors } from "../../../../datas/groups";

class NavigationListItemContainer extends React.Component {
  componentDidMount() {
    const { currentUserGroupId, getCurrentUserGroup } = this.props;
    if (currentUserGroupId) getCurrentUserGroup({ id: currentUserGroupId });
  }

  render() {
    const { getCurrentUserGroup, ...others } = this.props;
    return <NavigationListItem {...others} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentUserGroupId = ownProps.currentUserGroupId || "";
  const { avatarURL: currentUserGroupAvatarURL = "" } =
    groupsSelectors.getGroupById(state, currentUserGroupId) || {};
  return { currentUserGroupId, currentUserGroupAvatarURL };
};

const mapDispatchToProps = dispatch => ({
  getCurrentUserGroup: payload =>
    dispatch(groupsActions.getGroupRequest(payload))
});

NavigationListItemContainer.propTypes = {
  currentUserGroupId: PropTypes.string.isRequired,
  getCurrentUserGroup: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationListItemContainer);
