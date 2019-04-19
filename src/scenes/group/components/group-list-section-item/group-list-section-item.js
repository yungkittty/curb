import React from "react";
import PropTypes from "prop-types";
import ItemContainer from "./components/item-container";
import ItemHeader from "./components/item-header";
import ItemMedia from "./components/item-media";
import withMedia from "../../../../hocs/with-media";

const GroupListSectionItem = ({
  isMediaFetching,
  mediaCreatorId,
  mediaDateCreation,
  mediaType,
  mediaData,
  theme
}) => (
  <ItemContainer>
    <ItemHeader
      isMediaFetching={isMediaFetching}
      mediaCreatorId={mediaCreatorId}
      mediaDateCreation={mediaDateCreation}
      theme={theme}
    />
    <ItemMedia
      // eslint-disable-line
      isMediaFetching={isMediaFetching}
      mediaType={mediaType}
      mediaData={mediaData}
    />
  </ItemContainer>
);

GroupListSectionItem.propTypes = {
  isMediaFetching: PropTypes.bool.isRequired,
  mediaCreatorId: PropTypes.string.isRequired,
  mediaDateCreation: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
  mediaData: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withMedia(GroupListSectionItem);
