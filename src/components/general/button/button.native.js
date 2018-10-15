import React from "react";
import styled from "styled-components";
import { TouchableHighlight } from "react-native";

const button = ({ style, children, to }) => (
  <Link style={style} to={to}>
    {children}
  </Link>
);

const Button = styled(button)``;

export default Button;
