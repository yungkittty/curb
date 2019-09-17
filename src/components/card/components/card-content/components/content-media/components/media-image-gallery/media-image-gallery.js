import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import GalleryImage from "./components/gallery-image";

const MediaImageGallery = ({ mediaData, ...others }) => {
  const isOneImage = mediaData.length === 1;
  return _.map(mediaData, (src, index) => (
    <GalleryImage
      {...others}
      key={index}
      index={index}
      src={src}
      isOneImage={isOneImage}
      isLastImage={index !== mediaData.length - 1}
      mediaDataLength={mediaData.length}
    />
  ));
};

MediaImageGallery.propTypes = {
  mediaData: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MediaImageGallery;
