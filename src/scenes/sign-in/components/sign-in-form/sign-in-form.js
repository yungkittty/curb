import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import FormContainer from "./components/form-container";
import Input from "../../../../components/input";

const SignInForm = ({ onChange, email, password, t }) => (
  <FormContainer>
    <Input
      size="modal"
      id="email"
      placeholder={t("common:email")}
      value={email.value}
      onChange={onChange}
      error={email.error && t(`validation:email.${email.error}`)}
    />
    <Input
      size="modal"
      id="password"
      placeholder={t("common:password")}
      type="password"
      value={password.value}
      onChange={onChange}
      error={password.error && t(`validation:password.${password.error}`)}
    />
  </FormContainer>
);

SignInForm.propTypes = {
  t: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }).isRequired,
  password: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }).isRequired
};

export default withTranslation()(SignInForm);
