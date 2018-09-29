import React from "react";
import styled from "styled-components";
import { TouchableHighlight } from "react-native";

const button = ({ style, children, onClick }) => (
  <TouchableHighlight style={style} onPress={onClick}>
    {children}
  </TouchableHighlight>
);

const Button = styled(button)``;

export default Button;
