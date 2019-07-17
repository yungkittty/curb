import React from "react";
import Circle from "../../../circle";
import Button from "../../../button";
import Container from "../../../container";

const NavigationButton = ({
  // eslint-disable-next-line
  hideContainer,
  ...others
}) => (
  <Container>
    <Circle
      // eslint-disable-line
      {...others}
      as={Button}
      diameter="small"
      style={{ marginBottom: 10 }}
    />
  </Container>
);

export default NavigationButton;
