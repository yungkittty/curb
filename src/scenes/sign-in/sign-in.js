import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import SignInContainer from "./components/content-container";
import SignInRedirect from "./components/content-redirect";
import SignInForm from "./components/content-form";

class SignIn extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      data: {
        email = {
          value: "",
          error: undefined
        },
        password = {
          value: "",
          error: undefined
        }
      } = {},
      setTitle,
      setButtonTitle,
      setButtonClick

    } = this.props;

    this.state = { 
      email, 
      password 
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
    const {
      signIn
    } = this.props;
    const { 
      email, 
      password 
    } = this.state;
    
    signIn({ email: email.value, password: password.value });
  }

  checkForm() {
    const { email, password } = this.state;

    const emailCheck = this.checkInput("email", email.value);
    const passwordCheck = this.checkInput(
      "password",
      password.value
    );

    return emailCheck && passwordCheck;
  }

  checkInput(id, value) {
    const error =
      value.length === 0 ? "missing" : undefined; 

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
        <SignInForm email={email} password={password} onChange={this.handleChange} />
        <SignInRedirect />
      </SignInContainer>
    );
  }
}

SignIn.defaultProps = {
  data: undefined
};

SignIn.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({
    email: PropTypes.object,
    password: PropTypes.object
  }),
  signIn: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setButtonTitle: PropTypes.isRequired,
  setButtonClick: PropTypes.isRequired
};

export default withNamespaces("signIn")(SignIn);
