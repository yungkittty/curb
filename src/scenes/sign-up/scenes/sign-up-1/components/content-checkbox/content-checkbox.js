import React from "react";
import CheckboxContainer from "./components/checkbox-container";
import Checkbox from "../../../../../../components/checkbox";

const ContentCheckbox = ({ id, name, label }) => (
  <CheckboxContainer>
    <Checkbox id={id} name={name} label={label} />
  </CheckboxContainer>
);

export default ContentCheckbox;
