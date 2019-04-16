/* eslint-disable */

import React from "react";
import ItemContainer from "./components/item-container";
import ItemHeader from "./components/item-header";
import ItemMedia from "./components/item-media";

const GroupListSectionItem = ({
  isGroupMediaFetching,
  // groupMediaId,
  groupMediaCreatorId,
  groupMediaType,
  groupMediaDateCreation,
  groupMediaData
}) => (
  <ItemContainer>
    <ItemHeader
      isGroupMediaFetching={isGroupMediaFetching}
      groupMediaCreatorId={groupMediaCreatorId}
      groupMediaDateCreation={groupMediaDateCreation}
    />
    <ItemMedia
      isGroupMediaFetching={isGroupMediaFetching}
      groupMediaType={groupMediaType}
      groupMediaData={groupMediaData}
    />
  </ItemContainer>
);

export default GroupListSectionItem;
