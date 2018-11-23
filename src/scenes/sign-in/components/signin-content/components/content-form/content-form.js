import React from "react";
import FormContainer from "./components/form-container";
import FormInput from "./components/form-input"

const ContentForm = ({ onChange }) => (
  <FormContainer>
    <FormInput 
        id="username" 
        placeholder="Username" 
        onChange={onChange}
        s
    />
    <FormInput 
        id="pass" 
        placeholder="Password" 
        onChange={onChange}
        type="password" 
        s
    />
  </FormContainer>
);

export default ContentForm;