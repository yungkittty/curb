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
  color: ${({ theme }) => theme.fontColor};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.errorColor : theme.primaryColor};
    ${({ textStyleNative }) =>
      textStyleNative && `font-size: ${textStyleNative.fontSize}px;`}
    ${({ textStyleNative }) =>
      textStyleNative && `font-weight: ${textStyleNative.fontWeight};`}
    ${({ textStyleNative }) =>
      textStyleNative && `text-align:${textStyleNative.textAlign};`}
`;

export default InputField;
