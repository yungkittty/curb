import React from "react";
import styled from "styled-components";
import { Platform, TextInput } from "react-native";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.native.js

const Input = styled(({ type, onChange, id, ...others }) => (
  <TextInput
    {...others}
    secureTextEntry={type === "password"}
    onChangeText={text => onChange({ target: { id, value: text } })}
  />
))`
  font-family: "Montserrat-Regular";
  padding: ${Platform.OS === "android" ? "16" : "18"}px 16px;
  font-size: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.errorColor : theme.primaryColor};
`;

export default Input;
