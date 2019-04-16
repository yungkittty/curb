import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageGroup from "./image-group";
import { groupsActions, groupsSelectors } from "../../datas/groups";

class ImageGroupContainer extends React.Component {
  componentDidMount() {
    const { hasBeenFetched, groupId, getGroup } = this.props;
    if (!hasBeenFetched && groupId) {
      getGroup({ id: groupId });
    }
  }

  render() {
    const { groupId, getGroup, ...others } = this.props;
    return <ImageGroup {...others} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    isFetching: isGroupFetching = ownProps.isGroupFetching && true,
    id: groupId = ownProps.groupId || "",
    name: groupName = ownProps.groupName || "",
    _avatarUrl: groupAvatarUrl = ownProps._groupAvatarUrl || "", // eslint-disable-line
    theme: groupTheme = ownProps.groupTheme || ""
  } = groupsSelectors.getGroupById(state, ownProps.groupId) || {};
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

ImageGroupContainer.defaultProps = { isGroupFetching: true };

ImageGroupContainer.propTypes = {
  hasBeenFetched: PropTypes.bool.isRequired,
  isGroupFetching: PropTypes.bool,
  groupId: PropTypes.string.isRequired,
  getGroup: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGroupContainer);
