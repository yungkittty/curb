import React from "react";
import PropTypes from "prop-types";
import InputRead from "./components/input-read";
import InputContainer from "./components/input-container";
import InputField from "./components/input-field";
import InputError from "./components/input-error";

const Input = ({
  style,
  size,
  error,
  readOnly,
  textStyle,
  textStyleNative,
  value,
  ...others
}) => (
  <InputContainer style={style} size={size}>
    {readOnly ? (
      <InputRead textStyle={textStyle} textStyleNative={textStyleNative}>
        {value}
      </InputRead>
    ) : (
      <InputField
        error={error}
        textStyle={textStyle}
        textStyleNative={textStyleNative}
        value={value}
        {...others}
      />
    )}
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
