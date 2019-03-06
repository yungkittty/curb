import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import MiddleContainer from "./components/middle-container";
import Text from "../../../../../text";
import MiddleDot from "./components/middle-dot";

const HeaderMiddle = ({ title, progress: { total, progress } }) => (
  <MiddleContainer>
    {title && (
      <Text type="h3" weight={600}>
        {title}
      </Text>
    )}
    {progress &&
      _.times(total, index => (
        <MiddleDot key={index} enabled={index >= progress} />
      ))}
  </MiddleContainer>
);

HeaderMiddle.defaultProps = {
  title: undefined,
  progress: {}
};

HeaderMiddle.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.shape({
    progress: PropTypes.number,
    total: PropTypes.number
  })
};

export default HeaderMiddle;
