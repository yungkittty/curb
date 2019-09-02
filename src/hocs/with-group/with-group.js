import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";
import { groupsActions, groupsSelectors } from "../../datas/groups";

const withGroup = WrappedComponent => {
  class WithGroup extends React.Component {
    componentDidMount() {
      const { groupId, getGroup } = this.props;
      if (groupId) {
        getGroup({ id: groupId });
      }
    }

    componentDidUpdate(prevProps) {
      const { groupId, getGroup } = this.props;
      if (groupId && groupId !== prevProps.groupId) {
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
    const groupId =
      ownProps.groupId || ((matchPath(pathname, { path: "/groups/:id" }) || {}).params || {}).id || "";
    const {
      isFetching: isFetchingGroup = false,
      creatorId: groupCreatorId = "",
      dateCreation: groupDateCreation = "",
      name: groupName = "",
      category: groupCategory = "",
      avatarUrl: groupAvatar = "",
      status: groupStatus = "",
      theme: groupTheme = "",
      inviteToken: groupInviteToken = "",
      users: groupUsersId = [],
      mediaTypes: groupMediaTypes = [],
      medias: groupMediasId = [],
      errorCode: groupErrorCode = ""
    } = groupsSelectors.getGroupById(state, groupId) || {};
    return {
      isFetchingGroup,
      groupId,
      groupCreatorId,
      groupDateCreation,
      groupName,
      groupCategory,
      groupAvatar,
      groupStatus,
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

  WithGroup.propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line
    groupId: PropTypes.string.isRequired,
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
