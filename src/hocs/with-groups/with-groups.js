import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { groupsActions } from "../../datas/groups";

const withGroups = WrappedComponent => {
  class WithGroups extends React.Component {
    componentDidMount() {
      const {
        // eslint-disable-line
        groupsId,
        getGroups
      } = this.props;
      if (groupsId.length) {
        getGroups({ ids: groupsId });
      }
    }

    componentDidUpdate(prevProps) {
      const {
        // eslint-disable-line
        groupsId,
        getGroups
      } = this.props;
      if (groupsId.length && groupsId.length !== prevProps.groupsId.length) {
        getGroups({ ids: _.differenceWith(groupsId, prevProps.groupsId) });
      }
    }

    render() {
      const { getGroups, ...others } = this.props;
      return <WrappedComponent {...others} />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    getGroups: payload => dispatch(groupsActions.getGroupsRequest(payload))
  });

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
