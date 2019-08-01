import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import LoaderContainer from "./components/loader-container";
import LoaderCircle from "./components/loader-circle";
import CircleContainer from "../circle-container";

const Loader = ({ size }) => (
  <LoaderContainer>
    <CircleContainer diameter={size}>
      {innerDiameter =>
        _.times(8, index => <LoaderCircle key={index} index={index} innerDiameter={innerDiameter} />)
      }
    </CircleContainer>
  </LoaderContainer>
);

Loader.defaultProps = {
  size: "medium"
};

Loader.propTypes = {
  size: PropTypes.oneOf([
    // eslint-disable-line
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
    "extra-extra-large"
  ])
};

export default Loader;
