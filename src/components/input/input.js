import React from "react";
import { isMobile } from "react-device-detect";
import PropTypes from "prop-types";
import InputContainer from "./components/input-container";
import InputField from "./components/input-field";
import InputError from "./components/input-error";
import Text from "../text";

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
  <InputContainer style={style} size={size} readOnly={readOnly}>
    {readOnly ? (
      <Text style={!isMobile ? textStyle : textStyleNative}>{value}</Text>
    ) : (
      <InputField
        error={error}
        style={!isMobile ? textStyle : textStyleNative}
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
  error: undefined,
  readOnly: false,
  textStyle: {},
  textStyleNative: {},
  value: ""
};

Input.propTypes = {
  // eslint-disable-next-line
  style: PropTypes.object,
  size: PropTypes.oneOf(["modal"]),
  error: PropTypes.string,
  readOnly: PropTypes.bool,
  // eslint-disable-next-line
  textStyle: PropTypes.object,
  // eslint-disable-next-line
  textStyleNative: PropTypes.object,
  value: PropTypes.string
};

export default Input;
