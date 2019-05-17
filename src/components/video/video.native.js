import React from "react";
import PropTypes from "prop-types";
import Video from "react-native-video-controls";

// https://www.npmjs.com/package/react-native-video
// https://www.npmjs.com/package/react-native-video-controls

// eslint-disable-next-line
const _Video = ({ src, objectFit, ...others }) => (
  <Video
    {...others}
    source={{ uri: src[0] === "/" ? `${process.env.REACT_APP_API_URL}${src}` : src }}
    resizeMode={objectFit}
    toggleResizeModeOnFullscreen={false}
    controlTimeout={4000}
    disableBack
    disableVolume
    disableFullscreen
    paused
  />
);

_Video.defaultProps = {
  objectFit: undefined
};

_Video.propTypes = {
  src: PropTypes.string.isRequired,
  objectFit: PropTypes.oneOf(["cover", "contain"])
};

export default _Video;
