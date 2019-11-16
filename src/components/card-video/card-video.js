import React from "react";
import PropTypes from "prop-types";
import Video from "../video";

const CardVideo = ({ style, ...others }) => (
  <Video {...others} style={{ ...style, width: "100%", height: "100%" }} />
);

CardVideo.defaultProps = { style: undefined };

CardVideo.propTypes = { style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) };

export default CardVideo;
