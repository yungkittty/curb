import React from "react";
import PropTypes from "prop-types";
import MiddleContainer from "./components/middle-container";
import MiddleTitle from "./components/middle-title";
import MiddleProgress from "./components/middle-progress";

const HeaderMiddle = ({ title, progress }) => {
  return (
    <MiddleContainer>
      {title && <MiddleTitle title={title} />}
      {progress && <MiddleProgress progress={progress} />}
    </MiddleContainer>
  );
};

HeaderMiddle.defaultProps = {
  title: undefined,
  progress: undefined
};

HeaderMiddle.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.object
};

export default HeaderMiddle;
