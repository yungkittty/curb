import React from "react";
import PropTypes from "prop-types";
import CircleContainer from "./components/circle-container";
import CircleRoundContainer from "./components/circle-round-container";
import CircleRound from "./components/circle-round";

const LoaderCircle = ({ index, innerDiameter, mounted }) => (
  <CircleContainer index={index} innerDiameter={innerDiameter}>
    <CircleRoundContainer index={index} mounted={mounted}>
      <CircleRound innerDiameter={innerDiameter} />
    </CircleRoundContainer>
  </CircleContainer>
);

LoaderCircle.propTypes = {
  index: PropTypes.number.isRequired,
  innerDiameter: PropTypes.number.isRequired,
  mounted: PropTypes.bool.isRequired
};

export default LoaderCircle;
