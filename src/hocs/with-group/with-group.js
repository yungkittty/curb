import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { groupsActions, groupsSelectors } from "../../datas/groups";

const withGroup = WrappedComponent => {
  class WithGroup extends React.Component {
    componentDidMount() {
      const { groupId, getGroup } = this.props;
      if (groupId) {
        console.log({ groupId });
        getGroup({ id: groupId });
      }
    }

    componentDidUpdate(prevProps) {
      const { groupId, getGroup } = this.props;
      if (groupId !== prevProps.groupId) {
        console.log({ groupId, other: prevProps.groupId });
        getGroup({ id: groupId });
      }
    }

    render() {
      const { getGroup, ...others } = this.props;
      return <WrappedComponent {...others} />;
    }
  }

  const mapStateToProps = (state, ownProps) => {
    const groupId = ownProps.groupId || ((ownProps.match || {}).params || {}).id || "";
    const {
      isFetching: isGroupFetching = true,
      creatorId: groupCreatorId = "",
      dateCreation: groupDateCreation = "",
      name: groupName = "",
      avatarUrl: groupAvatar = "",
      status: groupStatus = "",
      theme: groupTheme = "",
      users: groupUsersId = [],
      mediaTypes: groupMediaTypes = [],
      medias: groupMediasId = [],
      errorCode: groupErrorCode = ""
    } = groupsSelectors.getGroupById(state, groupId) || {};
    return {
      isGroupFetching,
      groupId,
      groupCreatorId,
      groupDateCreation,
      groupName,
      groupAvatar,
      groupStatus,
      groupTheme,
      groupUsersId,
      groupMediaTypes,
      groupMediasId,
      groupErrorCode
    };
  };

  const mapDispatchToProps = dispatch => ({
    getGroup: payload => dispatch(groupsActions.getGroupRequest(payload))
  });

  WithGroup.propTypes = {
    groupId: PropTypes.string.isRequired,
    getGroup: PropTypes.func.isRequired
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithGroup);
};

export default withGroup;
