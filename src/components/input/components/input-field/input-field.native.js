import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TextInput } from "react-native";

const inputfield = ({
  type,
  placeholder,
  value,
  onChange,
  id,
  style,
  children
}) => (
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

const InputField = styled(inputfield)`
  font-size: 18px;
  padding: 18px;
  borderBottomWidth: 1px;
  borderBottomColor: ${props => (props.error ? "#eb5757" : "#c8ccd4")};
  width: 100%;
`;

inputfield.defaultProps = {
  type: undefined,
  placeholder: undefined,
  value: undefined,
  onChange: undefined,
  id: undefined,
  style: undefined,
  children: undefined
};

inputfield.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  /* eslint-disable-next-line */
  style: PropTypes.array,
  children: PropTypes.func
};

export default InputField;
