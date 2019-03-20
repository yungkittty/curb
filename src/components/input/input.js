import React from "react";
import PropTypes from "prop-types";
import InputContainer from "./components/input-container";
import InputField from "./components/input-field";
import InputError from "./components/input-error";

const Input = ({ style, size, error, ...others }) => (
  <InputContainer style={style} size={size}>
    <InputField error={error} {...others} />
    {error && <InputError>{error}</InputError>}
  </InputContainer>
);

Input.defaultProps = {
  style: undefined,
  size: undefined,
  error: undefined
};

Input.propTypes = {
  // eslint-disable-next-line
  style: PropTypes.object,
  size: PropTypes.oneOf(["modal"]),
  error: PropTypes.string
};

export default Input;
