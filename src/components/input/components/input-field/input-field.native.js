import React from "react";
import styled from "styled-components";
import { TextInput } from "react-native";

const InputField = styled(({ type, onChange, id, ...others }) => (
  <TextInput
    {...others}
    secureTextEntry={type === "password"}
    onChangeText={text => onChange({ target: { id, value: text } })}
  />
))`
  width: 100%;
  padding: 18px;
  font-family: "Montserrat";
  font-size: 14px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.errorColor : theme.primaryColor};
`;

export default InputField;
