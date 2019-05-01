import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../../container";
import ProgressLoadingText from "./components/progress-loading-text";

const PreviewProgress = ({ style, loadingProgress }) => (
  <Container
    style={{
      borderRadius: style && style.borderRadius,
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, .35)"
    }}
  >
    <ProgressLoadingText type="h1" weight={700}>
      {`${parseInt(loadingProgress * 100, 10)} %`}
    </ProgressLoadingText>
  </Container>
);

PreviewProgress.defaultProps = {
  loadingProgress: undefined
};

PreviewProgress.propTypes = {
  // eslint-disable-next-line
  style: PropTypes.object,
  loadingProgress: PropTypes.number
};

export default PreviewProgress;
