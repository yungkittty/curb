/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import HeaderContainer from "./components/header-container";
import HeaderButtonImageUser from "./components/header-button-image-user";
import HeaderInfos from "./components/header-infos";

const ItemHeader = ({
  isGroupMediaCreatorFetching,
  groupMediaCreatorId,
  groupMediaCreatorName,
  groupMediaCreatorAvatarUrl,
  groupMediaDateCreation,
  theme
}) => (
  <HeaderContainer>
    <HeaderButtonImageUser
      isUserFetching={isGroupMediaCreatorFetching}
      userId={groupMediaCreatorId}
      userAvatarUrl={groupMediaCreatorAvatarUrl}
      size="small"
      placeholderColor={theme.primaryVariantColor}
      hasBeenFetched
    />
    <HeaderInfos
      groupMediaCreatorName={groupMediaCreatorName}
      groupMediaDateCreation={groupMediaDateCreation}
    />
  </HeaderContainer>
);

export default withTheme(ItemHeader);
