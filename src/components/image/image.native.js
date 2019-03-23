import React from "react";
import { Image as ReactNativeImage } from "react-native";
import PropTypes from "prop-types";

const Image = ({ src: uri, ...others }) => (
  <ReactNativeImage
    {...others}
    source={{
      uri,
      cache: "reload"
    }}
  />
);

Image.propTypes = {
  // eslint-disable-next-line
  src: PropTypes.any.isRequired
};

export default Image;
