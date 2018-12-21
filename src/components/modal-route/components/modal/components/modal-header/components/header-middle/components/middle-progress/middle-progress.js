import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ProgressContainer from "./components/progress-container";
import ProgressDot from "./components/progress-dot";

const MiddleProgress = ({ progress: { progress, total } }) => (
  <ProgressContainer>
    {_.times(total, index => (
      <ProgressDot key={index} enabled={index >= progress} />
    ))}
  </ProgressContainer>
);

MiddleProgress.propTypes = {
  progress: PropTypes.shape({
    progress: PropTypes.number,
    total: PropTypes.number
  }).isRequired
};

export default MiddleProgress;
