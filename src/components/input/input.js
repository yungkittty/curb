import React from "react";
import PropTypes from "prop-types";
import InputContainer from "./components/input-container";
import InputPlaceholder from "./components/input-placeholder";
import InputField from "./components/input-field";
import InputError from "./components/input-error";

const Input = ({ size, type, placeholder, value, onChange, id, error }) => (
  <InputContainer size={size}>
    <InputPlaceholder upper={value !== ""}>{placeholder}</InputPlaceholder>
    <InputField
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      error={error}
    />
    {error && <InputError>{error}</InputError>}
  </InputContainer>
);

Input.defaultProps = {
  size: undefined,
  type: undefined,
  placeholder: undefined,
  error: undefined
};

Input.propTypes = {
  size: PropTypes.oneOf(["modal"]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default Input;
