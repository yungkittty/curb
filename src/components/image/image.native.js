import React from "react";
import ReactNative from "react-native";
import PropTypes from "prop-types";

const Image = ({ src: uri, ...others }) => (
  <ReactNative.Image {...others} source={{ uri }} />
);

Image.propTypes = {
  // eslint-disable-next-line
  src: PropTypes.any.isRequired
};

export default Image;
