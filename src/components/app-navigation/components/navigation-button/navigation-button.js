import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Circle from "../../../circle";
import Button from "../../../button";

const NavigationButton = ({
  // eslint-disable-next-line
  style,
  hideContainer,
  ...others
}) => (
  <Circle
    // eslint-disable-line
    {...others}
    as={Button}
    diameter="small"
    style={{ ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style), marginBottom: 10 }}
  />
);

NavigationButton.defaultProps = {
  hideContainer: undefined,
  style: undefined
};

NavigationButton.propTypes = {
  style: PropTypes.oneOfType([
    // eslint-disable-line
    PropTypes.object,
    PropTypes.array
  ]),
  hideContainer: PropTypes.func
};

export default NavigationButton;
