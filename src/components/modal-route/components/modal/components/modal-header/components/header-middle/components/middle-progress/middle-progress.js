import React from "react";
import PropTypes from "prop-types";
import ProgressContainer from "./components/progress-container";
import ProgressDot from "./components/progress-dot";

const MiddleProgress = ({ progress }) => {
  const progressState = progress["progress"];
  const total = progress["total"];

  let dots = [];
  for (let i = 0; i < total; i++) {
    dots.push(
      <ProgressDot key={i} enabled={i < progressState ? false : true} />
    );
  }
  return <ProgressContainer>{dots}</ProgressContainer>;
};

MiddleProgress.propTypes = {
  progress: PropTypes.object
};

export default MiddleProgress;
