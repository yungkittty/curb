import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TextInput, Platform } from "react-native";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.native.js

const Input = styled(({ id, type, onChange, style, isMultiline, ...others }) => (
  <TextInput
    {...others}
    textAlignVertical={isMultiline ? "top" : "center"}
    keyboardType={type === "email" ? "email-address" : undefined}
    secureTextEntry={type === "password"}
    onChangeText={value => onChange({ target: { id, value } })}
    style={style}
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

Input.defaultProps = {
  isMultiline: false
};

Input.propTypes = {
  isMultiline: PropTypes.bool
};

export default Input;
