/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import MediaContainer from "./components/media-container";
import MediaImage from "./components/media-image";
import MediaText from "./components/media-text";
// import MediaLocation from "./components/media-location";
import MediaVideo from "./components/media-video";

const ItemMedia = ({
  // eslint-disable-line
  isGroupMediaFetching,
  groupMediaType,
  groupMediaData
}) => (
  <MediaContainer>
    {/* eslint-disable */}
    {groupMediaType === "image" ? (
      <MediaImage src={groupMediaData} />
    ) : groupMediaType === "location" ? (
      <MediaLocation />
    ) : groupMediaType === "text" ? (
      <MediaText>{groupMediaData}</MediaText>
    ) : groupMediaType === "video" ? (
      <MediaVideo src={`${process.env.REACT_APP_API_URL}${groupMediaData}`} controls />
    ) : null}
    {/* eslint-enable */}
  </MediaContainer>
);

export default ItemMedia;
