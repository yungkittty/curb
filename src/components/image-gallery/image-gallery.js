import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import GalleryImage from "./components/gallery-image";

const ImageGallery = ({ imagesData, ...others }) => {
  const isOneImage = imagesData.length === 1;
  return _.map(imagesData, (src, index) => (
    <GalleryImage
      {...others}
      key={index}
      src={src}
      isOneImage={isOneImage}
      isLastImage={index !== imagesData.length - 1}
    />
  ));
};

ImageGallery.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageGallery;
