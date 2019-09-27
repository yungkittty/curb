import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import MiddleTitle from "./components/middle-title";
import MiddleStep from "./components/middle-step";

const HeaderMiddle = ({
  // eslint-disable-line
  appModalHeaderText,
  appModalHeaderCurrentStep,
  appModalHeaderSteps
}) => (
  <React.Fragment>
    {appModalHeaderText ? (
      <MiddleTitle type="h3" weight={600}>
        {appModalHeaderText}
      </MiddleTitle>
    ) : null}
    {appModalHeaderCurrentStep
      ? _.times(appModalHeaderSteps, index => (
          // eslint-disable-next-line
          <MiddleStep key={index} isEnabled={index < appModalHeaderCurrentStep} />
        ))
      : null}
  </React.Fragment>
);

HeaderMiddle.propTypes = {
  appModalHeaderText: PropTypes.string.isRequired,
  appModalHeaderCurrentStep: PropTypes.number.isRequired,
  appModalHeaderSteps: PropTypes.number.isRequired
};

export default HeaderMiddle;
