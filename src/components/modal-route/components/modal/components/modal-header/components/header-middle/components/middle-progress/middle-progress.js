import React from "react";
import PropTypes from "prop-types";
import ProgressContainer from "./components/progress-container";
import ProgressDot from "./components/progress-dot";

const MiddleProgress = ({ progress: { progress, total } }) => {
  const progressState = progress;
  const totalState = total;

  const dots = [];
  for (let i = 0; i < totalState; i += 1) {
    dots.push(<ProgressDot key={i} enabled={i >= progressState} />);
  }
  return <ProgressContainer>{dots}</ProgressContainer>;
};

MiddleProgress.propTypes = {
  progress: PropTypes.shape({ progress: Number, total: Number }).isRequired
};

export default MiddleProgress;
