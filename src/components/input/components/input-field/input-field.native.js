import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TextInput } from "react-native";

const inputField = ({ type, onChange, id, ...others }) => (
  <TextInput
    secureTextEntry={type === "password"}
    onChangeText={text => onChange({ target: { id, value: text } })}
    {...others}
  />
);

const InputField = styled(inputField)`
  font-size: 18px;
  padding: 18px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.error ? "#eb5757" : "#c8ccd4")};
  width: 100%;
`;

InputField.defaultProps = {
  type: undefined,
  placeholder: undefined,
  value: undefined,
  onChange: undefined,
  id: undefined,
  style: undefined,
  children: undefined
};

InputField.propTypes = {
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
