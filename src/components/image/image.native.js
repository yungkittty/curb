import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";

// eslint-disable-next-line
const _Image = ({ src: uri, ...others }) => <Image {...others} source={{ uri, cache: "reload" }} />;

_Image.propTypes = {
  // eslint-disable-next-line
  src: PropTypes.any.isRequired
};

export default _Image;
