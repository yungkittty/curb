import React from "react";
import PropTypes from "prop-types";
import InputContainer from "./components/input-container";
import InputField from "./components/input-field";
import InputError from "./components/input-error";

const Input = ({ type, placeholder, value, onChange, id, error }) => (
  <InputContainer>
    <InputField
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      error={error}
    />
    {error && <InputError>{error}</InputError>}
  </InputContainer>
);

Input.defaultProps = {
  type: undefined,
  placeholder: undefined,
  value: undefined,
  onChange: undefined,
  id: undefined,
  error: undefined
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  error: PropTypes.string
};

export default Input;
