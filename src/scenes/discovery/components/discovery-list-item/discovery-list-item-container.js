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
  const discoveryGroupId = ownProps.discoveryGroupId || "";
  const { avatarUrl: discoveryGroupAvatarUrl = "", name: discoveryGroupName = "Something" } =
    groupsSelectors.getGroupById(state, discoveryGroupId) || {};
  return {
    discoveryGroupId,
    discoveryGroupName,
    discoveryGroupAvatarUrl
  };
};

const mapDispatchToProps = dispatch => ({
  getDiscoveryGroup: payload =>
    dispatch(groupsActions.getGroupRequest(payload))
});

DiscoveryListItemContainer.propTypes = {
  discoveryGroupId: PropTypes.string.isRequired,
  discoveryGroupName: PropTypes.string.isRequired,
  discoveryGroupAvatarUrl: PropTypes.string.isRequired,
  getDiscoveryGroup: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoveryListItemContainer);
