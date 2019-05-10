import React from "react";
import Video from "react-native-video";
import PropTypes from "prop-types";

// eslint-disable-next-line
const _Video = ({ src: uri, ...others }) => <Video {...others} source={{ uri }} />;

_Video.propTypes = {
  // eslint-disable-next-line
  src: PropTypes.any.isRequired
};

export default _Video;
