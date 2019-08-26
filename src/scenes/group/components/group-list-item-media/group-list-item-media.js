import React from "react";
import PropTypes from "prop-types";
import ItemContainer from "./components/item-container";
import ItemHeader from "./components/item-header";
import ItemMedia from "./components/item-media";
import withMedia from "../../../../hocs/with-media";

const GroupListItemMedia = ({
  // eslint-disable-line
  mediaCreatorId,
  mediaDateCreation,
  mediaType,
  mediaData,
  groupCreatorId,
  groupGradientColors,
  theme
}) => (
  <ItemContainer>
    <ItemHeader
      // eslint-disable-line
      userId={mediaCreatorId}
      mediaDateCreation={mediaDateCreation}
      groupCreatorId={groupCreatorId}
      groupGradientColors={groupGradientColors}
      theme={theme}
    />
    <ItemMedia
      // eslint-disable-line
      mediaType={mediaType}
      mediaData={mediaData}
    />
  </ItemContainer>
);

GroupListItemMedia.propTypes = {
  mediaCreatorId: PropTypes.string.isRequired,
  mediaDateCreation: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired,
  mediaData: PropTypes.string.isRequired,
  groupCreatorId: PropTypes.string.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withMedia(GroupListItemMedia);
