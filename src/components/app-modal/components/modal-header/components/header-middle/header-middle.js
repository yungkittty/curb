import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Text from "../../../../../text";
import MiddleStep from "./components/middle-step";

const HeaderMiddle = ({ text, currentStep, steps }) => (
  <React.Fragment>
    {text ? (
      <Text type="h3" weight={600}>
        {text}
      </Text>
    ) : null}
    {steps ? _.times(steps, index => (
      <MiddleStep key={index} enabled={index >= currentStep} />
    )) : null}
  </React.Fragment>
);

HeaderMiddle.defaultProps = {
  text: undefined,
  currentStep: undefined,
  steps: undefined
};

HeaderMiddle.propTypes = {
  text: PropTypes.string,
  currentStep: PropTypes.number,
  steps: PropTypes.number
};

export default HeaderMiddle;
