import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";
import { groupsActions, groupsSelectors } from "../../datas/groups";

const withGroup = WrappedComponent => {
  class WithGroup extends React.Component {
    componentDidMount() {
      const {
        // eslint-disable-line
        shouldFetch,
        isFetchingGroup,
        groupId,
        getGroup
      } = this.props;
      if (shouldFetch && !isFetchingGroup && groupId) {
        getGroup({ id: groupId });
      }
    }

    componentDidUpdate(prevProps) {
      const {
        // eslint-disable-line
        shouldFetch,
        isFetchingGroup,
        groupId,
        getGroup
      } = this.props;
      if (shouldFetch && !isFetchingGroup && groupId && groupId !== prevProps.groupId) {
        getGroup({ id: groupId });
      }
    }

    render() {
      const { getGroup, ...others } = this.props;
      return <WrappedComponent {...others} />;
    }
  }

  const mapStateToProps = (state, ownProps) => {
    const { pathname } = ownProps.location;
    const groupParamsId = ((matchPath(pathname, { path: "/groups/:id" }) || {}).params || {}).id;
    const groupId = ownProps.groupId || groupParamsId;
    const group = groupsSelectors.getGroupById(state, groupId);
    if (!group) return { groupId };
    const {
      isFetching: isFetchingGroup,
      creatorId: groupCreatorId,
      dateCreation: groupDateCreation,
      name: groupName,
      category: groupCategory,
      avatarUrl: groupAvatar,
      status: groupStatus,
      description: groupDescription,
      theme: groupTheme,
      inviteToken: groupInviteToken,
      users: groupUsersId,
      mediaTypes: groupMediaTypes,
      medias: groupMediasId,
      errorCode: groupErrorCode
    } = group;
    return {
      isFetchingGroup,
      groupId,
      groupCreatorId,
      groupDateCreation,
      groupName,
      groupCategory,
      groupAvatar,
      groupStatus,
      groupDescription,
      groupTheme,
      groupInviteToken,
      groupUsersId,
      groupMediaTypes,
      groupMediasId,
      groupErrorCode
    };
  };

  const mapDispatchToProps = dispatch => ({
    getGroup: payload => dispatch(groupsActions.getGroupRequest(payload))
  });

  WithGroup.defaultProps = {
    shouldFetch: true,
    isFetchingGroup: false,
    groupId: "",
    groupCreatorId: "",
    groupDateCreation: "",
    groupName: "",
    groupAvatar: "",
    groupStatus: "",
    groupTheme: "",
    groupInviteToken: "",
    groupUsersId: [],
    groupMediaTypes: [],
    groupMediasId: [],
    groupErrorCode: ""
  };

  WithGroup.propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line
    shouldFetch: PropTypes.bool,
    isFetchingGroup: PropTypes.bool,
    groupId: PropTypes.string,
    groupCreatorId: PropTypes.string,
    groupDateCreation: PropTypes.string,
    groupName: PropTypes.string,
    groupAvatar: PropTypes.string,
    groupStatus: PropTypes.string,
    groupTheme: PropTypes.string,
    groupInviteToken: PropTypes.string,
    groupUsersId: PropTypes.array, // eslint-disable-line
    groupMediaTypes: PropTypes.array, // eslint-disable-line
    groupMediasId: PropTypes.array, // eslint-disable-line
    groupErrorCode: PropTypes.string,
    getGroup: PropTypes.func.isRequired
  };

  return _.flowRight([
    // eslint-disable-line
    withRouter,
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  ])(WithGroup);
};

export default withGroup;
