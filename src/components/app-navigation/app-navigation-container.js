/* eslint-disable */

import React from "react";
import { connect } from "react-redux";
import AppNavigation from "./app-navigation";
import { currentUserSelectors } from "../../datas/current-user";
import { usersActions, usersSelectors } from "../../datas/users";

class AppNavigationContainer extends React.Component {
  componentDidMount() {}

  render() {
    return <AppNavigation />;
  }
}

// ...

const mapStateToProps = state => {
  const currentUserId = currentUserSelectors.getCurrentUserId(state);
  const currentUserGroups =
    (currentUserId && usersSelectors.getUserGroupsById(currentUserId)) || [];
  return { currentUserId, currentUserGroups };
};

// ...

const mapDispatchToProps = dispatch => ({
  getUser: payload => dispatch(usersActions.getUserFailure(payload))
});

// ...

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavigationContainer);
