import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";
import { groupsActions, groupsSelectors } from "../../datas/groups";
import { postActions } from "../../datas/post";

const withGroup = WrappedComponent => {
  class WithGroup extends React.Component {
    componentDidMount() {
      const {
        // eslint-disable-line
        shouldFetch,
        groupId,
        getGroup,
        shouldFetchPostList
      } = this.props;
      if ((shouldFetch || shouldFetchPostList) && groupId) {
        getGroup({ id: groupId, fetchPostList: shouldFetchPostList });
      }
    }

    componentDidUpdate(prevProps) {
      const {
        // eslint-disable-line
        shouldFetch,
        groupId,
        getGroup,
        shouldFetchPostList
      } = this.props;
      if ((shouldFetch || shouldFetchPostList) && groupId && groupId !== prevProps.groupId) {
        getGroup({ id: groupId, fetchPostList: shouldFetchPostList });
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
      creatorId: groupCreatorId,
      dateCreation: groupDateCreation,
      name: groupName,
      category: groupCategory,
      description: groupDescription,
      avatarUrl: groupAvatar,
      status: groupStatus,
      theme: groupTheme,
      inviteToken: groupInviteToken,
      users: groupUsersId,
      mediaTypes: groupMediaTypes,
      filterdPosts: groupPostsId,
      errorCode: groupErrorCode
    } = group;
    return {
      groupId,
      groupCreatorId,
      groupDateCreation,
      groupName,
      groupCategory,
      groupDescription,
      groupAvatar,
      groupStatus,
      groupTheme,
      groupInviteToken,
      groupUsersId,
      groupMediaTypes,
      groupPostsId,
      groupErrorCode,
      shouldFetchPostList: groupId === groupParamsId
    };
  };

  const mapDispatchToProps = dispatch => ({
    getGroup: payload => dispatch(groupsActions.getGroupRequest(payload)),
    getGroupPostList: payload => dispatch(postActions.getPostListRequest(payload))
  });

  WithGroup.defaultProps = {
    shouldFetch: true,
    shouldFetchPostList: false,
    groupId: "",
    groupCreatorId: "",
    groupDateCreation: "",
    groupName: "",
    groupCategory: "",
    groupDescription: "",
    groupAvatar: "",
    groupStatus: "",
    groupTheme: "",
    groupInviteToken: "",
    groupUsersId: [],
    groupMediaTypes: [],
    groupPostsId: [],
    groupErrorCode: ""
  };

  WithGroup.propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line
    shouldFetch: PropTypes.bool,
    shouldFetchPostList: PropTypes.bool,
    groupId: PropTypes.string,
    groupCreatorId: PropTypes.string,
    groupDateCreation: PropTypes.string,
    groupName: PropTypes.string,
    groupCategory: PropTypes.string,
    groupDescription: PropTypes.string,
    groupAvatar: PropTypes.string,
    groupStatus: PropTypes.string,
    groupTheme: PropTypes.string,
    groupInviteToken: PropTypes.string,
    groupUsersId: PropTypes.array, // eslint-disable-line
    groupMediaTypes: PropTypes.array, // eslint-disable-line
    groupPostsId: PropTypes.array, // eslint-disable-line
    groupErrorCode: PropTypes.string,
    getGroup: PropTypes.func.isRequired,
    getGroupPostList: PropTypes.func.isRequired
  };

  return _.flowRight([
    // eslint-disable-line
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
  ])(WithGroup);
};

export default withGroup;
