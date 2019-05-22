import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TextInput, Platform } from "react-native";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.native.js

const Input = styled(({ type, onChange, id, isMultiline, ...others }) => (
  <TextInput
    {...others}
    secureTextEntry={type === "password"}
    keyboardType={type === "email" ? "email-address" : undefined}
    onChangeText={value => onChange({ target: { id, value } })}
    multiline={isMultiline}
  />
))`
  padding: 15px;
  font-family: Montserrat-Regular;
  font-size: 16px;
  ${Platform.OS === "android" ? "font-weight: normal;" : ""}
  text-align-vertical: top;
  ${props => (props.isMultiline ? `line-height: ${16 * 1.5}px;` : "")}
  color: ${({ theme }) => theme.fontColor};
`;

Input.defaultProps = {
  isMultiline: false
};

Input.propTypes = {
  isMultiline: PropTypes.bool
};

export default Input;
