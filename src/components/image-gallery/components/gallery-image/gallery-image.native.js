import React from "react";
import { Linking } from "react-native";
import PropTypes from "prop-types";
import Button from "../../../button";
import Image from "../../../image";

const GalleryImage = ({ src, cardSize, isOneImage, isLastImage, mediaDataLength, ...others }) => {
  const isImageFromApi = src.substr(0, 9) === "/contents";
  return (
    <Button
      style={{ flex: 1, height: "100%", marginRight: !isOneImage && isLastImage ? 5 : 0 }}
      onClick={() => Linking.openURL(`${process.env.REACT_APP_API_URL}${src}`)}
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
