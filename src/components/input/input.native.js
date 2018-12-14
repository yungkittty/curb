import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TextInput } from "react-native";

const input = ({ type, placeholder, value, onChange, id, style, children }) => (
  <TextInput
    secureTextEntry={type === "password"}
    placeholder={placeholder}
    value={value}
    onChangeText={text => onChange({ target: { id, value: text } })}
    style={style}
  >
    {children}
  </TextInput>
);

const Input = styled(input)`
  font-size: 18px;
  padding: 18px;
  borderBottomWidth: 1px;
  borderBottomColor: #c8ccd4;
  ${props => (props.s ? "width: 240px" : null)};
`;

input.defaultProps = {
  type: undefined,
  placeholder: undefined,
  value: undefined,
  onChange: undefined,
  id: undefined,
  style: undefined,
  children: undefined
};

input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  /* eslint-disable-next-line */
  style: PropTypes.array,
  children: PropTypes.func
};

export default Input;
