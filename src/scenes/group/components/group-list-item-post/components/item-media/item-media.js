import React from "react";
import PropTypes from "prop-types";
import MediaImage from "./components/media-image";
import MediaLocation from "./components/media-location";
import MediaText from "./components/media-text";
import MediaVideo from "./components/media-video";

const ItemMedia = ({
  // eslint-disable-line
  mediaType,
  mediaData
}) =>
  /* eslint-disable */
  mediaType === "image" ? (
    <MediaImage src={mediaData} />
  ) : mediaType === "location" ? (
    <MediaLocation {...JSON.parse(mediaData)} />
  ) : mediaType === "text" ? (
    <MediaText>
      {/* eslint-disable-line */}
      {mediaData}
    </MediaText>
  ) : mediaType === "video" ? (
    <MediaVideo src={mediaData} />
  ) : null;
/* eslint-enable */

ItemMedia.propTypes = {
  mediaType: PropTypes.string.isRequired,
  mediaData: PropTypes.string.isRequired
};

export default ItemMedia;
