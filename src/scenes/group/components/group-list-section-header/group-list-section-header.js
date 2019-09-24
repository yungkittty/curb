import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { withTranslation } from "react-i18next";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";
import HeaderTitle from "./components/header-title";
import HeaderButtonText from "./components/header-button-text";
import HeaderRule from "./components/header-rule";

class GroupListSectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: undefined, isInvited: undefined };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { groupId, groupStatus, currentUserId, currentUserGroupsId, isFetchingGroups } = nextProps;
    if (!groupId || !groupStatus || prevState.isShowed === false) return {};
    const isGroupPublic = groupStatus === "public";
    const isCurrentUserIn = _.includes(currentUserGroupsId, groupId);
    const isInvited = _.includes(nextProps.location.pathname, "?inviteToken=");
    const isShowed = !!currentUserId && !isCurrentUserIn && (isGroupPublic || isInvited) && !isFetchingGroups;
    return { isShowed, isInvited };
  }

  render() {
    const { isShowed, isInvited } = this.state;
    const { location, groupId, groupTheme, postGroupInviteToken, theme, t } = this.props;
    const { inviteToken } = location.state || {};
    return isShowed ? (
      <HeaderContainer>
        <HeaderButtonIcon
          icon="times"
          size="extra-small"
          color={theme.primaryColor}
          onClick={() => this.setState({ isShowed: false })}
        />
        <HeaderTitle>
          {/* eslint-disable-line */}
          {isInvited ? t("headerTitle") : t("headerTitleBis")}
        </HeaderTitle>
        <HeaderButtonText
          weight={700}
          groupTheme={groupTheme}
          contentStyle={{ color: theme.backgroundColor }}
          onClick={() => postGroupInviteToken({ id: groupId, token: inviteToken })}
        >
          {t("headerButtonText")}
        </HeaderButtonText>
        <HeaderRule />
      </HeaderContainer>
    ) : null;
  }
}

GroupListSectionHeader.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
  groupId: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired, // eslint-disable-line
  groupTheme: PropTypes.string.isRequired,
  postGroupInviteToken: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired, // eslint-disable-line
  currentUserGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  isFetchingGroups: PropTypes.bool.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withRouter,
  withTranslation("group")
])(GroupListSectionHeader);
