import React from "react";
import FormContainer from "./components/form-container";
import Input from "../../../../../../components/input";

const ContentForm = () => (
  <FormContainer>
    <Input placeholder="Username" />
    <Input placeholder="Password" type="password" />
  </FormContainer>
);

export default ContentForm;