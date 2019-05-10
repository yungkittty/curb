import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import FormContainer from "./components/form-container";
import InputForm from "../../../../components/input-form";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  render() {
    const { t, onChange, email, password, onSubmit } = this.props;
    return (
      <FormContainer>
        <InputForm
          ref={this.emailRef}
          size="modal"
          id="email"
          type="email"
          returnKeyType="next"
          placeholder={t("email")}
          value={email.value}
          onChange={onChange}
          error={email.error && t(`validation:email.${email.error}`)}
          onSubmitEditing={() => {
            console.log(this.passwordRef);
          }}
        />
        <InputForm
          ref={this.passwordRef}
          size="modal"
          id="password"
          type="password"
          returnKeyType="done"
          placeholder={t("password")}
          value={password.value}
          onChange={onChange}
          error={password.error && t(`validation:password.${password.error}`)}
          onSubmitEditing={onSubmit}
        />
      </FormContainer>
    );
  }
}

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
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withTranslation("common")(SignInForm);
