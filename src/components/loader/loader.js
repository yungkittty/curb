import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import LoaderContainer from "./components/loader-container";
import LoaderAnimationRound from "./components/loader-animation-round";
import CircleContainer from "../circle-container";
import loaderData from "./loader-data";

const Loader = ({ size }) => (
  <LoaderContainer>
    <CircleContainer diameter={size} style={{ transform: `translate(-50%, -50%)` }}>
      {innerDiameter =>
        _.map(loaderData, (props, index) => (
          <LoaderAnimationRound key={index} innerDiameter={innerDiameter} {...props} />
        ))
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
