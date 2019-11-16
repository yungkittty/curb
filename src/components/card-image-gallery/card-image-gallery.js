import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import GalleryImage from "./components/gallery-image";

const CardImageGallery = ({ imagesData, ...others }) => {
  const isOneImage = imagesData.length === 1;
  return _.map(imagesData, ({ data }, index) => (
    <GalleryImage
      {...others}
      key={index}
      src={data}
      isOneImage={isOneImage}
      isLastImage={index !== imagesData.length - 1}
    />
  ));
};

CardImageGallery.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CardImageGallery;
