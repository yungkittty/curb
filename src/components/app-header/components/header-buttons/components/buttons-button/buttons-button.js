import React from "react";
import Circle from "../../../../../circle";
import Button from "../../../../../button";
import Icon from "../../../../../icon";

const ButtonsButton = props => (
  <Circle
    // eslint-disable-line
    {...props}
    as={Button}
    diameter="small"
    style={{ marginRight: 10 }}
    component={Icon}
    size="small"
  />
);

export default ButtonsButton;
