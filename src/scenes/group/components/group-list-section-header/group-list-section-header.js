import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
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
    const { groupId, groupStatus, userGroupsId } = nextProps;
    if (!groupId || !groupStatus || prevState.isShowed === false) return {};
    const isUserIn = _.includes(userGroupsId, groupId);
    const { isUserInvited } = nextProps.location.state || {};
    const isGroupPublic = groupStatus === "public";
    return { isShowed: !isUserIn && (isGroupPublic || isUserInvited), isInvited: isUserInvited };
  }

  render() {
    const { isShowed, isInvited } = this.state;
    const { groupId, groupTheme, postGroupInviteToken, theme, t } = this.props;
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
          onClick={() => postGroupInviteToken({ id: groupId })}
        >
          {t("headerButtonText")}
        </HeaderButtonText>
        <HeaderRule />
      </HeaderContainer>
    ) : null;
  }
}

GroupListSectionHeader.propTypes = {
  /* eslint-disable */
  location: PropTypes.object.isRequired,
  userGroupsId: PropTypes.array.isRequired,
  groupId: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  postGroupInviteToken: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  /* eslint-enable */
  t: PropTypes.func.isRequired
};

export default GroupListSectionHeader;
