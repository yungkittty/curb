import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import LoaderContainer from "./components/loader-container";
import LoaderCircle from "./components/loader-circle";
import LoaderCircleContainer from "./components/loader-circle-container";

const Loader = ({ className, style, size }) => (
  <LoaderContainer className={className} style={style}>
    <LoaderCircleContainer diameter={size}>
      {innerDiameter =>
        _.times(8, index => <LoaderCircle key={index} index={index} innerDiameter={innerDiameter} />)
      }
    </LoaderCircleContainer>
  </LoaderContainer>
);

Loader.defaultProps = {
  className: undefined,
  style: undefined,
  size: "small"
};

Loader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.string
};

export default Loader;
