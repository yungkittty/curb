import React from "react";
import CheckboxContainer from "./components/checkbox-container";
import Checkbox from "../../../../../components/general/input/checkbox";

const OneCheckbox = ({ id, name, label }) => (
  <CheckboxContainer center>
    <Checkbox id={id} name={name} label={label} />
  </CheckboxContainer>
);

export default OneCheckbox;
