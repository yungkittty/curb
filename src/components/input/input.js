import React from "react";
import PropTypes from "prop-types";
import InputContainer from "./components/input-container";
import InputTitle from "./components/input-title";
import InputField from "./components/input-field";
import InputError from "./components/input-error";

const Input = ({
  size,
  title,
  type,
  placeholder,
  value,
  onChange,
  id,
  error
}) => (
  <InputContainer size={size}>
    {title && <InputTitle>{title}</InputTitle>}
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
  size: undefined,
  title: undefined,
  type: undefined,
  placeholder: undefined,
  error: undefined
};

Input.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default Input;
