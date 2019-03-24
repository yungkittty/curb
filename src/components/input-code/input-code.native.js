import React from "react";
import PropTypes from "prop-types";
import CodeInput from "react-native-code-input";

const InputCode = ({ id, fields, onChange }) => (
  <CodeInput
    codeLength={fields}
    codeInputStyle={{
      width: 28,
      height: 42,
      margin: 0,
      marginLeft: 12,
      marginRight: 12,
      fontSize: 22,
      color: "#333"
    }}
    activeColor="#e0e0e0"
    inactiveColor="#e0e0e0"
    borderType="underline"
    onFulFill={value => onChange({ target: { id, value } })}
  />
);

InputCode.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputCode;
