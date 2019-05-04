/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import InfoContainer from "./components/info-container";
import InfoList from "./components/info-list";
import InfoListItemUser from "./components/info-list-item-user";
import InfoListItemMediaType from "./components/info-list-item-media-type";

const GroupListItemInfo = ({
  // eslint-disable-line
  groupUsersId,
  groupMediaTypes,
  theme
}) => (
  <InfoContainer>
    <InfoList
      text={"Users"}
      data={groupUsersId}
      renderItem={({ item: userId }) => (
        <InfoListItemUser
          // eslint-disable-line
          userId={userId}
          theme={theme}
        />
      )}
    />
    <InfoList
      text={"Modules"}
      data={groupMediaTypes}
      renderItem={() => (
        <InfoListItemMediaType
          // eslint-disable-line
          theme={theme}
        />
      )}
    />
  </InfoContainer>
);

export default GroupListItemInfo;
