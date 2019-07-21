import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { batchActions } from "redux-batched-actions";
import { groupsActionsTypes, groupsActions } from "../../datas/groups";

const withGroups = WrappedComponent => {
  class WithGroups extends React.Component {
    componentDidMount() {
      const {
        // eslint-disable-line
        groupsId,
        getGroups
      } = this.props;
      if (groupsId.length) {
        getGroups(groupsId);
      }
    }

    componentDidUpdate(prevProps) {
      const {
        // eslint-disable-line
        groupsId,
        getGroups
      } = this.props;
      if (groupsId.length && groupsId.length !== prevProps.groupsId.length) {
        getGroups(_.differenceWith(groupsId, prevProps.groupsId));
      }
    }

    render() {
      const { getGroups, ...others } = this.props;
      return <WrappedComponent {...others} />;
    }
  }

  const mapDispatchToProps = dispatch => {
    const getGroup = groupId => groupsActions.getGroupRequest({ id: groupId });
    const getGroupsActionType = groupsActionsTypes.GET_GROUPS_REQUEST;
    const getGroups = groupsId => dispatch(batchActions(_.map(groupsId, getGroup), getGroupsActionType));
    return { getGroups };
  };

  WithGroups.propTypes = {
    groupsId: PropTypes.array, // eslint-disable-line
    getGroups: PropTypes.func.isRequired
  };

  return connect(
    undefined,
    mapDispatchToProps
  )(WithGroups);
};

export default withGroups;
