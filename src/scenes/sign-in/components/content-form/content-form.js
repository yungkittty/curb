import React from "react";
import FormContainer from "./components/form-container";
import Input from "../../../../components/input";

const ContentForm = ({ onChange, username, password }) => (
  <FormContainer>
    <Input 
      size="modal"
      id="username" 
      placeholder="Username"
      value={username.value}
      onChange={onChange}
      error={username.error ? username.errorMsg : null}
    />
    <Input
      size="modal"
      id="password"
      placeholder="Password"
      type="password"
      value={password.value}
      onChange={onChange}
      error={password.error ? password.errorMsg : null}
    />
  </FormContainer>
);

export default ContentForm;
