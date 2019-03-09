import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import FormContainer from "./components/form-container";
import Input from "../../../../components/input";

const ResetPasswordForm = ({ onChange, password, confirmPassword, t }) => (
  <FormContainer>
    <Input
      size="modal"
      id="password"
      placeholder={t("common:password")}
      type="password"
      value={password.value}
      onChange={onChange}
      error={password.error && t(`validation:password.${password.error}`)}
    />
    <Input
      size="modal"
      id="confirmPassword"
      placeholder={t("common:confirmPassword")}
      type="password"
      value={confirmPassword.value}
      onChange={onChange}
      error={
        confirmPassword.error &&
        t(`validation:password.${confirmPassword.error}`)
      }
    />
  </FormContainer>
);

ResetPasswordForm.propTypes = {
  t: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  password: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }).isRequired,
  confirmPassword: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }).isRequired
};

export default withNamespaces()(ResetPasswordForm);
