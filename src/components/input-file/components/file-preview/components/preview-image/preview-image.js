import React from "react";
import PropTypes from "prop-types";
import Image from "../../../../../image";

const PreviewImage = ({ objectFit, data, ...others }) => (
  <Image
    {...others}
    src={data}
    style={{
      width: "100%",
      height: "100%",
      objectFit
    }}
  />
);

PreviewImage.defaultProps = {
  objectFit: "cover"
};

PreviewImage.propTypes = {
  data: PropTypes.string.isRequired,
  objectFit: PropTypes.oneOf(["cover"])
};

export default PreviewImage;
