import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TextInput } from "react-native";

const onChangeHandler = (onChange, id, text) => {
  onChange({ target: { id, value: text } });
}

const input = ({ style, children, type, placeholder, onChange, id }) =>
  <TextInput secureTextEntry={type == "password" ? true : false} placeholder={placeholder} onChangeText={onChangeHandler.bind(null, onChange, id)} style={style}>
    {children}
  </TextInput>;

input.defaultProps = {
  onChange: undefined
};

input.propTypes = {
  onChange: PropTypes.func
};

const Input = styled(input)`
  font-size: 18px;
  padding: 18px;
  borderBottomWidth: 1px;
  borderBottomColor: #c8ccd4;
  ${props => (props.s ? "width: 240px" : null)};
`;

export default Input;
