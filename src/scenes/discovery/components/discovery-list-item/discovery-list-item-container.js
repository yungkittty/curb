import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DiscoveryListItem from "./discovery-list-item";
import { groupsActions, groupsSelectors } from "../../../../datas/groups";

class DiscoveryListItemContainer extends React.Component {
  componentDidMount() {
    const { getDiscoveryGroup, discoveryGroupId } = this.props;
    getDiscoveryGroup({ id: discoveryGroupId });
  }

  render() {
    const { getDiscoveryGroup, ...others } = this.props;
    return <DiscoveryListItem {...others} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    isFetching: isDiscoveryGroupFetching = true,
    id: discoveryGroupId = ownProps.discoveryGroupId || "",
    name: discoveryGroupName = "",
    avatarUrl: discoveryGroupAvatarUrl = "",
    theme: discoveryGroupTheme = ""
  } = groupsSelectors.getGroupById(state, ownProps.discoveryGroupId) || {};
  return {
    isDiscoveryGroupFetching,
    discoveryGroupId,
    discoveryGroupName,
    discoveryGroupAvatarUrl,
    discoveryGroupTheme
  };
};

const mapDispatchToProps = dispatch => ({
  getDiscoveryGroup: payload => dispatch(groupsActions.getGroupRequest(payload))
});

DiscoveryListItemContainer.propTypes = {
  discoveryGroupId: PropTypes.string.isRequired,
  getDiscoveryGroup: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoveryListItemContainer);
