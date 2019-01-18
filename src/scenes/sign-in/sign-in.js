import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import SignInContainer from "./components/sign-in-container";
import SignInRedirect from "./components/sign-in-redirect";
import SignInForm from "./components/sign-in-form";

class SignIn extends Component {
  constructor(props) {
    super(props);
    const { t, setTitle, setButtonTitle, setButtonClick } = this.props;

    this.state = {
      email: {
        value: "",
        error: undefined
      },
      password: {
        value: "",
        error: undefined
      }
    };

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setTitle(t("signIn"));
    setButtonTitle(t("login"));
    setButtonClick(this.validate.bind(this));
  }

  validate() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const { signIn } = this.props;
    const { email, password } = this.state;
    signIn({ email: email.value, password: password.value });
  }

  checkForm() {
    const { email, password } = this.state;

    const emailCheck = this.checkInput("email", email.value);
    const passwordCheck = this.checkInput("password", password.value);

    return emailCheck && passwordCheck;
  }

  checkInput(id, value) {
    const error = value.length === 0 ? "missing" : undefined;

    this.setState(prev => {
      const obj = {
        [id]: {
          ...prev[id],
          value,
          error
        }
      };
      return obj;
    });

    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
  }

  render() {
    const { email, password } = this.state;

    return (
      <SignInContainer>
        <SignInForm
          email={email}
          password={password}
          onChange={this.handleChange}
        />
        <SignInRedirect />
      </SignInContainer>
    );
  }
}

SignIn.propTypes = {
  t: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setButtonTitle: PropTypes.func.isRequired,
  setButtonClick: PropTypes.func.isRequired
};

export default withNamespaces("signIn")(SignIn);
