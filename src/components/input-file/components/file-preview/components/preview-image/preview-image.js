import React from "react";
import PropTypes from "prop-types";
import Image from "../../../../../image";

const PreviewImage = ({ imageFit, data, ...others }) => (
  <Image
    {...others}
    src={data}
    style={{
      width: "100%",
      height: "100%",
      objectFit: imageFit
    }}
  />
);

PreviewImage.defaultProps = {
  imageFit: "cover"
};

PreviewImage.propTypes = {
  data: PropTypes.string.isRequired,
  imageFit: PropTypes.oneOf(["cover", "contain"])
};

export default PreviewImage;
