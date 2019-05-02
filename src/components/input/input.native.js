import React from "react";
import styled from "styled-components";
import { TextInput, Platform } from "react-native";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.native.js

const Input = styled(({ type, onChange, id, forwardedRef, ...others }) => (
  <TextInput
    {...others}
    onChangeText={text => onChange({ target: { id, value: text } })}
    // eslint-disable-next-line
    {...(type === "email"
      ? {
          keyboardType: "email-address",
          textContentType: "emailAddress",
          autoCapitalize: "none",
          autoCorrect: false
        }
      : type === "password"
      ? { textContentType: "password", secureTextEntry: true, autoCorrect: false }
      : null)}
  />
))`
  font-family: Montserrat-Regular;
  ${Platform.OS === "android" ? "font-weight: normal;" : ""}
  color: ${({ theme }) => theme.fontColor}
  padding: 16px;
  font-size: 16px;
`;

export default Input;
