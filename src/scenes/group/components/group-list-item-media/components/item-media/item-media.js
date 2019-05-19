/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import MediaImage from "./components/media-image";
import MediaText from "./components/media-text";
import MediaVideo from "./components/media-video";

// placeholder components

const ItemMedia = ({
  // eslint-disable-line
  mediaType,
  mediaData
}) =>
  mediaType === "image" ? (
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
  ) : null;

ItemMedia.propTypes = {
  mediaType: PropTypes.string.isRequired,
  mediaData: PropTypes.string.isRequired
};

export default ItemMedia;
