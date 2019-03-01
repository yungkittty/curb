import React from "react";
import PropTypes from "prop-types";
import MiddleContainer from "./components/middle-container";
import Text from "../../../../../text";
import MiddleProgress from "./components/middle-progress";

const HeaderMiddle = ({ title, progress }) => (
  <MiddleContainer>
    {title && <Text type="h3" weight={600}>{title}</Text>}
    {progress && <MiddleProgress progress={progress} />}
  </MiddleContainer>
);

HeaderMiddle.defaultProps = {
  title: undefined,
  progress: undefined
};

HeaderMiddle.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.shape({
    progress: PropTypes.number,
    total: PropTypes.number
  })
};

export default HeaderMiddle;
