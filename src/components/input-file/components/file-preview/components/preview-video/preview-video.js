import React from "react";
import PropTypes from "prop-types";
import Video from "../../../../../video";

const PreviewVideo = ({ objectFit, data, ...others }) => (
  <Video
    {...others}
    src={data}
    style={{
      width: "100%",
      height: "100%",
      objectFit
    }}
  />
);

PreviewVideo.defaultProps = {
  objectFit: "cover"
};

PreviewVideo.propTypes = {
  data: PropTypes.string.isRequired,
  objectFit: PropTypes.oneOf(["cover"])
};

export default PreviewVideo;
