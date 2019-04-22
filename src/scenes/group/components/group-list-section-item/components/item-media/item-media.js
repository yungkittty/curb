import React from "react";
import PropTypes from "prop-types";
import MediaContainer from "./components/media-container";
import MediaText from "./components/media-text";

const MediaImage = () => null;
const MediaLocation = () => null;
const MediaVideo = () => null;

/** @todo placeholder not on point ! */

const ItemMedia = ({
  // eslint-disable-line
  isGettingMedia,
  mediaType,
  mediaData
}) => (
  <MediaContainer isGettingMedia={isGettingMedia}>
    {/* eslint-disable */}
    {isGettingMedia ? (
      () => null
    ) : mediaType === "image" ? (
      <MediaImage />
    ) : mediaType === "location" ? (
      <MediaLocation />
    ) : mediaType === "text" ? (
      <MediaText>{mediaData}</MediaText>
    ) : mediaType === "video" ? (
      <MediaVideo />
    ) : null}
    {/* eslint-enable */}
  </MediaContainer>
);

ItemMedia.propTypes = {
  isGettingMedia: PropTypes.bool.isRequired,
  mediaType: PropTypes.string.isRequired,
  mediaData: PropTypes.string.isRequired
};

export default ItemMedia;
