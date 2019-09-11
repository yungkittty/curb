import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import MediaContainer from "./components/media-container";
import MediaItemContainer from "./components/media-item-container";
import MediaImageGallery from "./components/media-image-gallery";
import MediaGroupPreview from "./components/media-group-preview";
import MediaPlaceholder from "./components/media-placeholder";

const ContentMedia = ({ mediaList, selectedIndex, cardSize, groupName, ...others }) => (
  <MediaContainer nbOfMediaTypes={_.size(mediaList)} selectedIndex={selectedIndex} cardSize={cardSize}>
    {/* eslint-disable-next-line */}
    {mediaList ? (
      _.map(mediaList, (mediaData, mediaListIndex) => (
        <MediaItemContainer>
          {mediaListIndex === "image" ? <MediaImageGallery mediaData={mediaData} /> : mediaData}
        </MediaItemContainer>
      ))
    ) : groupName ? (
      <MediaGroupPreview groupName={groupName} {...others} />
    ) : (
      <MediaPlaceholder />
    )}
  </MediaContainer>
);

ContentMedia.defaultProps = {
  groupId: undefined,
  groupName: undefined,
  mediaType: undefined,
  mediaData: undefined
};

ContentMedia.propTypes = {
  cardSize: PropTypes.shape({ size: PropTypes.string, width: PropTypes.number, height: PropTypes.number })
    .isRequired,
  groupId: PropTypes.string,
  groupName: PropTypes.string,
  mediaType: PropTypes.string,
  mediaData: PropTypes.string
};

export default ContentMedia;
