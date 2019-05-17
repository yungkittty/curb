import React from "react";
import PropTypes from "prop-types";
import MediaContainer from "./components/media-container";
import MediaImage from "./components/media-image";
import MediaText from "./components/media-text";
import MediaVideo from "./components/media-video";

const ItemMedia = ({
  // eslint-disable-line
  mediaType,
  mediaData
}) => (
  <MediaContainer mediaData={mediaData}>
    {/* eslint-disable */}
    {mediaType === "image" ? (
      <MediaImage src={mediaData} />
    ) : mediaType === "location" ? (
      <MediaLocation />
    ) : mediaType === "text" ? (
      <MediaText>
        {/* eslint-disable-line */}
        {mediaData}
      </MediaText>
    ) : mediaType === "video" ? (
      <MediaVideo src={mediaData} />
    ) : null}
    {/* eslint-enable */}
  </MediaContainer>
);

ItemMedia.propTypes = {
  mediaType: PropTypes.string.isRequired,
  mediaData: PropTypes.string.isRequired
};

export default ItemMedia;
