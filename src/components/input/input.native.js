import React from "react";
import styled from "styled-components";
import { TextInput } from "react-native";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.native.js

const Input = styled(({ type, onChange, id, ...others }) => (
  <TextInput
    {...others}
    secureTextEntry={type === "password"}
    keyboardType={type === "email" ? "email-address" : undefined}
    onChangeText={text => onChange({ target: { id, value: text } })}
  />
))`
  font-family: "Montserrat-Regular";
  color: ${({ theme }) => theme.fontColor}
  padding: 16px;
  font-size: 16px;
`;

export default Input;
