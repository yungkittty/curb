/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderIcon from "./components/header-icon";
import HeaderImageGroup from "./components/header-image-group";
import HeaderTitle from "./components/header-title";

const GroupListHeader = ({
  // eslint-disable-line
  isGroupFetching,
  groupId,
  groupName,
  groupAvatarUrl,
  groupTheme,
  theme
}) => (
  <HeaderContainer groupTheme={groupTheme} onClick={() => undefined}>
    <React.Fragment>
      <HeaderIcon
        // eslint-disable-line
        icon="info-circle"
        size="small"
        color={theme.backgroundColor}
      />
      <HeaderImageGroup
        isGroupFetching={isGroupFetching}
        groupId={groupId}
        groupName={groupName}
        groupAvatarUrl={groupAvatarUrl}
        groupTheme={groupTheme}
        size="large"
        placeholderColor={theme.backgroundColor}
        hasBeenFetched
      />
      <HeaderTitle type="h1" weight={700}>
        {/* eslint-disable-line */}
        {groupName}
      </HeaderTitle>
    </React.Fragment>
  </HeaderContainer>
);

export default GroupListHeader;
