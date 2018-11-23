import React from "react";
import FormContainer from "./components/form-container";
import Input from "../../../../../../components/input";

const ContentForm = ({ onChange }) => (
  <FormContainer>
    <Input 
        id="username" 
        placeholder="Username" 
        onChange={onChange}
        s
    />
    <Input 
        id="pass" 
        placeholder="Password" 
        onChange={onChange}
        type="password" 
        s
    />
  </FormContainer>
);

export default ContentForm;