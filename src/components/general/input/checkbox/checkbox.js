import React from "react";
import PropTypes from "prop-types";
import CheckboxContainer from "./components/checkbox-container";
import Root from "./root";
import Label from "../../text/label";

const Checkbox = ({ id, name, label }) => {
  return (
    <CheckboxContainer>
      <Root id={id} name={name} />
      <Label for={id}>{label}</Label>
    </CheckboxContainer>
  );
};

Checkbox.defaultProps = {
  id: undefined,
  value: undefined,
  label: undefined
};

Checkbox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string
};

export default Checkbox;
