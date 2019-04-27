import React from "react";
import Circle from "../../../circle";
import Button from "../../../button";

const NavigationButton = props => (
  <Circle
    // eslint-disable-line
    {...props}
    as={Button}
    diameter="small"
    style={{ marginBottom: 10 }}
  />
);

export default NavigationButton;
