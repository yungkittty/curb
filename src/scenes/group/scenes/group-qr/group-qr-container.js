import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GroupQr from "./group-qr";
import { groupsActions, groupsSelectors } from "../../../../datas/groups";
import withAppModal from "../../../../hocs/with-app-modal";
import withGroup from "../../../../hocs/with-group";

class GroupQrContainer extends React.Component {
  componentDidMount() {
    const { groupStatus, getGroupInviteToken, groupId } = this.props;
    // eslint-disable-next-line
    groupStatus === "private" && getGroupInviteToken({ id: groupId });
  }

  render() {
    return <GroupQr {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isFetchingGroups: groupsSelectors.isFetchingGroups(state)
});

const mapDispatchToProps = dispatch => ({
  getGroupInviteToken: payload => dispatch(groupsActions.getGroupInviteTokenRequest(payload))
});

GroupQrContainer.propTypes = {
  groupId: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  getGroupInviteToken: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withGroup,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
])(GroupQrContainer);
