import React from "react";
import PropTypes from "prop-types";
import Video from "../video";
import CurbModule from "../curb-module";

class CardVideo extends CurbModule {
  getData() {
    const { file } = this.props;
    return file;
  }

  render() {
    const { style, ...others } = this.props;
    return <Video {...others} style={{ ...style, width: "100%", height: "100%" }} autoplay />;
  }
}

CardVideo.defaultProps = {
  style: undefined
};

CardVideo.propTypes = {
  file: PropTypes.object.isRequired, // eslint-disable-line
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default CardVideo;
