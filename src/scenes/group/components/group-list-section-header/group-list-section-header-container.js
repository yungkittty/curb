import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GroupListSectionHeader from "./group-list-section-header";
import { currentUserSelectors } from "../../../../datas/current-user";
import { usersActions, usersSelectors } from "../../../../datas/users";

class GroupListSectionHeaderContainer extends React.Component {
  componentDidMount() {
    const { currentUserId, getCurrentUser } = this.props;
    if (currentUserId) {
      getCurrentUser({ id: currentUserId });
    }
  }

  render() {
    const { currentUserId, getCurrentUser, ...others } = this.props;
    return <GroupListSectionHeader {...others} />;
  }
}

// SHOULD I DISPLAY THE INVATION ACCOUNT ?

const mapStateToProps = state => {
  const currentUserId = currentUserSelectors.getCurrentUserId(state) || "";
  const { groups: currentUserGroups = [] } = usersSelectors.getUserById(state, currentUserId) || {};
  return { currentUserId, currentUserGroups };
};

const mapDispatchToProps = dispatch => ({
  getCurrentUser: payload => dispatch(usersActions.getUserRequest(payload))
});

GroupListSectionHeaderContainer.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  getCurrentUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupListSectionHeaderContainer);
