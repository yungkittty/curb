import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageGroup from "./image-group";
import { groupsActions, groupsSelectors } from "../../datas/groups";

class ImageGroupContainer extends React.Component {
  componentDidMount() {
    const { groupId, getGroup } = this.props;
    if (groupId) {
      getGroup({ id: groupId });
    }
  }

  render() {
    const { groupId, getGroup, ...others } = this.props;
    return <ImageGroup {...others} />;
  }
}

const mapStateToProps = (state, { groupId }) => {
  const {
    isFetching: isGroupFetching = true,
    name: groupName = "",
    avatarUrl: groupAvatarUrl = "",
    theme: groupTheme = ""
  } = groupsSelectors.getGroupById(state, groupId) || {};
  return {
    isGroupFetching,
    groupId,
    groupName,
    groupAvatarUrl,
    groupTheme
  };
};

const mapDispatchToProps = dispatch => ({
  getGroup: payload => dispatch(groupsActions.getGroupRequest(payload))
});

ImageGroupContainer.propTypes = {
  groupId: PropTypes.string.isRequired,
  getGroup: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGroupContainer);
