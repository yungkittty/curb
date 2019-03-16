import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import MiddleTitle from "./components/middle-title";
import MiddleStep from "./components/middle-step";

const HeaderMiddle = ({ text, currentStep, steps }) => (
  <React.Fragment>
    {text ? (
      <MiddleTitle type="h3" weight={600}>
        {text}
      </MiddleTitle>
    ) : null}
    {steps ? _.times(steps, index => (
      <MiddleStep key={index} enabled={index < currentStep} />
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
