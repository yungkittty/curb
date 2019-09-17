import React from "react";
import PropTypes from "prop-types";
import Button from "../../../button";
import Image from "../../../image";

const GalleryImage = ({ src, isOneImage, isLastImage, mediaDataLength, ...others }) => {
  const isImageFromApi = src.substr(0, 9) === "/contents";
  return (
    <Button
      style={{ flex: 1, height: "100%", marginRight: !isOneImage && isLastImage ? 10 : 0 }}
      onClick={() => window.open(`${process.env.REACT_APP_API_URL}${src}`)}
      disabled={!isImageFromApi}
    >
      <Image {...others} src={src} objectFit="cover" style={{ width: "100%", height: "100%" }} />
    </Button>
  );
};

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  isOneImage: PropTypes.bool.isRequired,
  isLastImage: PropTypes.bool.isRequired,
  mediaDataLength: PropTypes.number.isRequired
};

export default GalleryImage;
