import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Group from "./group";
import { groupsActions, groupsSelectors } from "../../datas/groups";

class GroupContainer extends React.Component {
  componentDidMount() {
    const { groupId, getGroup } = this.props;
    if (groupId) {
      getGroup({ id: groupId });
    }
  }

  render() {
    const { getGroup, ...others } = this.props;
    return <Group {...others} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    isFetching: isGroupFetching = true,
    id: groupId = ownProps.match.params.id,
    name: groupName = "",
    public: isGroupPublic = true,
    avatarUrl: groupAvatarUrl = "",
    medias: groupMediaIds = [],
    theme: groupTheme = ""
  } = groupsSelectors.getGroupById(state, ownProps.match.params.id) || {};
  return {
    isGroupFetching,
    groupId,
    groupName,
    isGroupPublic,
    groupAvatarUrl,
    groupMediaIds,
    groupTheme
  };
};

const mapDispatchToProps = dispatch => ({
  getGroup: payload => dispatch(groupsActions.getGroupRequest(payload))
});

GroupContainer.propTypes = {
  groupId: PropTypes.string.isRequired,
  getGroup: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupContainer);
