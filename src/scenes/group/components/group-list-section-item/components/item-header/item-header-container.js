/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ItemHeader from "./item-header";
import { usersActions, usersSelectors } from "../../../../../../datas/users";

class ItemHeaderContainer extends React.Component {
  componentDidMount() {
    const { groupMediaCreatorId, getMediaCreator } = this.props;
    /** @todo should omit call if is_fetching = true */
    getMediaCreator({ id: groupMediaCreatorId });
  }

  render() {
    const { getMediaCreator, ...others } = this.props;
    return <ItemHeader {...others} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    isFetching: isGroupMediaCreatorFetching = true,
    id: groupMediaCreatorId = ownProps.groupMediaCreatorId || "",
    name: groupMediaCreatorName = "",
    avatarUrl: groupMediaCreatorAvatarUrl = ""
  } = usersSelectors.getUserById(state, ownProps.groupMediaCreatorId) || {};
  return {
    isGroupMediaCreatorFetching,
    groupMediaCreatorId,
    groupMediaCreatorName,
    groupMediaCreatorAvatarUrl
  };
};

const mapDispatchToProps = dispatch => ({
  getMediaCreator: payload => dispatch(usersActions.getUserRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemHeaderContainer);
