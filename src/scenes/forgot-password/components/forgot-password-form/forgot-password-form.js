import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import FormContainer from "./components/form-container";
import Input from "../../../../components/input";

const ForgotPasswordForm = ({ onChange, email, t }) => (
  <FormContainer>
    <Input
      size="modal"
      id="email"
      placeholder={t("email")}
      value={email.value}
      onChange={onChange}
      error={email.error && t(`validation:email.${email.error}`)}
    />
  </FormContainer>
);

ForgotPasswordForm.propTypes = {
  t: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }).isRequired
};

export default withNamespaces("forgotPass")(ForgotPasswordForm);
