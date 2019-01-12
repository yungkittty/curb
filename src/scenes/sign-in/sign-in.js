import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentContainer from "./components/content-container";
import ContentRedirect from "./components/content-redirect";
import ContentForm from "./components/content-form";

class SignIn extends Component {
  constructor(props) {
    super(props);
    const {
      data: {
        email = {
          value: "",
          error: false,
          errorMsg: "You must enter a email"
        },
        password = {
          value: "",
          error: false,
          errorMsg: "You must enter a password"
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

    setTitle("Sign in");
    setButtonTitle("Login");
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
      value.length === 0; 

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

    return !error;
  }

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
  }

  render() {
    const { email, password } = this.state;

    return (
      <ContentContainer>
        <ContentForm email={email} password={password} onChange={this.handleChange} />
        <ContentRedirect />
      </ContentContainer>
    );
  }
}

SignIn.defaultProps = {
  data: undefined,
  setTitle: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

SignIn.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.object,
    password: PropTypes.object
  }),
  signIn: PropTypes.func.isRequired,
  setTitle: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default SignIn;
