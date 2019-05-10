import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line
const Video = ({ src, ...others }) => (
  // eslint-disable-next-line
  <video controls {...others}>
    <source src={src} />
  </video>
);

Video.propTypes = {
  // eslint-disable-next-line
  src: PropTypes.any.isRequired
};

export default Video;
