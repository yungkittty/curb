import React from "react";
import PropTypes from "prop-types";
import ReactCodeInput from "react-code-input";

const InputCode = ({ id, fields, onChange }) => (
  <ReactCodeInput
    type="number"
    inputStyle={{
      width: "36px",
      height: "42px",
      margin: "0px 12px",
      MozAppearance: "textfield",
      textAlign: "center",
      fontSize: "32px",
      color: "#333",
      border: "0px",
      borderBottom: "1px solid #e0e0e0"
    }}
    onChange={value => onChange({ target: { id, value } })}
    fields={fields}
  />
);

InputCode.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputCode;
