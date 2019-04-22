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

  /** @TODO QR should pass state is_invited! */

  static getDerivedStateFromProps(nextProps, prevState) {
    const { groupId, groupStatus, userGroupsIds } = nextProps;
    if (!groupId || !groupStatus || prevState.isShowed === false) return {};
    const { isInvited, inviteToken } = nextProps.location.state || {};
    const isGroupPublic = groupStatus === "public";
    const isUserIn = _.includes(userGroupsIds, groupId);
    const isUserInvited = isInvited && (isGroupPublic || RegExp("^([a-f\\d]{24})$").test(inviteToken));
    return { isShowed: !isUserIn && (isGroupPublic || isUserInvited), isInvited: isUserInvited };
  }

  render() {
    const { isShowed, isInvited } = this.state;
    const { groupTheme, theme, t } = this.props;
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
          text={t("headerButtonText")}
          weight={700}
          contentTextStyle={{ color: theme.backgroundColor }}
          groupTheme={groupTheme}
          onClick={() => undefined} // eslint-disable-line
        />
        <HeaderRule />
      </HeaderContainer>
    ) : null;
  }
}

GroupListSectionHeader.propTypes = {
  /* eslint-disable */
  location: PropTypes.object.isRequired,
  userGroupsIds: PropTypes.array.isRequired,
  groupId: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  /* eslint-enable */
  t: PropTypes.func.isRequired
};

export default _.flow([
  // eslint-disable-line
  withRouter,
  withTranslation("group")
])(GroupListSectionHeader);
