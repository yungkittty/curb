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
    const { data, style, ...others } = this.props;
    return <Video {...others} src={data} style={{ ...style, width: "100%", height: "100%" }} />;
  }
}

CardVideo.defaultProps = {
  style: undefined
};

CardVideo.propTypes = {
  file: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default CardVideo;
