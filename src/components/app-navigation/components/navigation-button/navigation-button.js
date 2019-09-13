import React from "react";
import Circle from "../../../circle";
import Button from "../../../button";

const NavigationButton = ({
  // eslint-disable-next-line
  hideContainer,
  ...others
}) => (
  <Circle
    // eslint-disable-line
    {...others}
    as={Button}
    diameter="small"
    style={{ marginBottom: 10 }}
  />
);

export default NavigationButton;
