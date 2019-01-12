import React from "react";
import PropTypes from "prop-types";
import FormContainer from "./components/form-container";
import Input from "../../../../components/input";

const ContentForm = ({ onChange, email, password } ) => (
  <FormContainer>
    <Input 
      size="modal"
      id="email" 
      placeholder="Email"      
      value={email.value}
      onChange={onChange}
      error={email.error ? email.errorMsg : null}
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

ContentForm.defaultProps = {
  onChange: undefined,
  email: undefined,
  password: undefined,
};

ContentForm.propTypes = {
  onChange: PropTypes.func,
  email: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.bool,
    errorMsg: PropTypes.string
  }),
  password: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.bool,
    errorMsg: PropTypes.string
  }),
};

export default ContentForm;
