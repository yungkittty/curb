import React from "react";
import styled from "styled-components";
import { TextInput } from "react-native";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.native.js

const Input = styled(({ type, onChange, id, ...others }) => (
  <TextInput
    {...others}
    secureTextEntry={type === "password"}
    onChangeText={text => onChange({ target: { id, value: text } })}
  />
))`
  width: 100%;
  padding: 16px;
  font-family: "Montserrat-Regular";
  font-size: 14px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.errorColor : theme.primaryColor};
`;

export default Input;
