import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withTranslation } from "react-i18next";
import GroupListSectionHeader from "./group-list-section-header";
import { groupsActions } from "../../../../datas/groups";

const mapDispatchToProps = dispatch => ({
  postGroupInviteToken: payload => dispatch(groupsActions.postGroupInviteTokenRequest(payload))
});

export default _.flowRight([
  // eslint-disable-line
  withRouter,
  withTranslation("group"),
  connect(
    undefined,
    mapDispatchToProps
  )
])(GroupListSectionHeader);
