import React from "react";
import CheckboxContainer from "./components/checkbox-container";
import Checkbox from "../../../../../../components/general/input/checkbox";

const ContentCheckbox = ({ id, name, label }) => (
  <CheckboxContainer center>
    <Checkbox id={id} name={name} label={label} />
  </CheckboxContainer>
);

export default ContentCheckbox;
