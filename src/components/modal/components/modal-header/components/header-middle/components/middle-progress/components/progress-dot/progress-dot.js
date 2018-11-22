import React from "react";
import PropTypes from "prop-types";
import DotContainer from "./components/dot-container";

const ProgressDot = ({ enabled }) => {
  return <DotContainer enabled={enabled} />;
};

ProgressDot.propTypes = {
  enabled: PropTypes.bool.isRequired
};

export default ProgressDot;
