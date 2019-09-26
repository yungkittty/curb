import React from "react";
import PropTypes from "prop-types";
import Circle from "../../../../../circle";
import Button from "../../../../../button";
import Icon from "../../../../../icon";

const ButtonsButton = ({ size, ...others }) => (
  <Circle
    // eslint-disable-line
    {...others}
    as={Button}
    diameter="small"
    component={Icon}
    size={size}
  />
);

ButtonsButton.defaultProps = { size: "small" };

ButtonsButton.propTypes = { size: PropTypes.string };

export default ButtonsButton;
