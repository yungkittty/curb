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
        username = {
          value: "",
          error: false,
          errorMsg: "You must enter a username"
        },
        password = {
          value: "",
          error: false,
          errorMsg: "You must enter a password"
        }
      } = {},
      setButtonTitle,
      setButtonClick

    } = this.props;

    this.state = { 
      username, 
      password 
    };

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
    
    signIn({ username: this.state.username.value, password: this.state.password.value });
  }

  checkForm() {
    const { username, password } = this.state;

    const usernameCheck = this.checkInput("username", username.value);
    const passwordCheck = this.checkInput(
      "password",
      password.value
    );

    return usernameCheck && passwordCheck;
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
    const { username, password } = this.state;

    return (
      <ContentContainer>
        <ContentForm username={username} password={password} onChange={this.handleChange} />
        <ContentRedirect />
      </ContentContainer>
    );
  }
}

SignIn.defaultProps = {
  data: undefined,
  signIn: () => null,
  setData: undefined,
  setTitle: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

SignIn.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.object,
    password: PropTypes.object
  }),
  signIn: PropTypes.func,
  setData: PropTypes.func,
  setTitle: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default SignIn;
