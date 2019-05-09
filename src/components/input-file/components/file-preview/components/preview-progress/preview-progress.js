import React from "react";
import PropTypes from "prop-types";
import ProgressContainer from "./components/progress-container";
import ProgressLoadingText from "./components/progress-loading-text";

const PreviewProgress = ({ loadingProgress }) => (
  <ProgressContainer>
    <ProgressLoadingText type="h1" weight={700}>
      {`${parseInt(loadingProgress * 100, 10)} %`}
    </ProgressLoadingText>
  </ProgressContainer>
);

PreviewProgress.defaultProps = {
  loadingProgress: undefined
};

PreviewProgress.propTypes = {
  loadingProgress: PropTypes.number
};

export default PreviewProgress;
