import React from "react";
import styled from "styled-components";
import { TextInput, Platform } from "react-native";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.native.js

// Because of an unexpected bug, the props 'forwaredRef' is not passed through styled

const InputContainer = styled(({ forwardRef, type, id, onChange, isMultiline, ...others }) => (
  <TextInput
    {...others}
    ref={forwardRef}
    textAlignVertical="top"
    keyboardType={type === "email" ? "email-address" : undefined}
    secureTextEntry={type === "password"}
    onChangeText={value => onChange({ target: { id, value } })}
    multiline={isMultiline}
  />
))`
  padding: 16px;
  font-family: Montserrat-Regular;
  font-size: 16px;
  ${Platform.OS === "android" ? "font-weight: normal;" : ""}
  ${props => (props.isMultiline ? `line-height: ${16 * 1.5}px;` : "")}
  color: ${({ theme }) => theme.fontColor};
`;

export default React.forwardRef(
  // eslint-disable-line
  (props, forwardRef) => (
    <InputContainer
      // eslint-disable-line
      {...props}
      forwardRef={forwardRef}
    />
  )
);
