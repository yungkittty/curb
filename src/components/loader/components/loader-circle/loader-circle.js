import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import CircleContainer from "./components/circle-container";
import CircleRoundContainer from "./components/circle-round-container";
import CircleRound from "./components/circle-round";

const LoaderCircle = ({ index, innerDiameter }) => (
  <CircleContainer index={index} innerDiameter={innerDiameter}>
    <CircleRoundContainer index={index} innerDiameter={innerDiameter}>
      <CircleRound innerDiameter={innerDiameter} />
    </CircleRoundContainer>
  </CircleContainer>
);

LoaderCircle.propTypes = {
  index: PropTypes.number.isRequired,
  innerDiameter: PropTypes.number.isRequired
};

export default LoaderCircle;
