import React from "react";
import styled from "styled-components";
import { TextInput } from "react-native";

const InputField = styled(({ type, onChange, id, ...others }) => (
  <TextInput
    secureTextEntry={type === "password"}
    onChangeText={text => onChange({ target: { id, value: text } })}
    {...others}
  />
))`
  font-size: 18px;
  padding: 18px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.errorColor : theme.primaryColor};
  width: 100%;
`;

export default InputField;
