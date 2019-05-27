import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "react-native-video-controls";

// https://www.npmjs.com/package/react-native-video
// https://www.npmjs.com/package/react-native-video-controls

const Video = ({ src: uri, objectFit, ...others }) => (
  <VideoPlayer
    {...others}
    source={{ uri }}
    resizeMode={objectFit}
    toggleResizeModeOnFullscreen={false}
    controlTimeout={4000}
    disableBack
    disableVolume
    disableFullscreen
    paused
  />
);

Video.defaultProps = {
  objectFit: undefined
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  objectFit: PropTypes.oneOf(["cover", "contain"])
};

export default Video;
