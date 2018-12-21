import React, { Component } from "react";
import ContentContainer from "./components/content-container";
import ContentForm from "./components/content-form";
import ContentRedirect from "./components/content-redirect";

class SignIn extends Component {
  constructor(props) {
    super(props);
    const { setTitle, setButtonTitle, setButtonClick } = this.props;

    this.state = { username: "", password: "" };

    setTitle("Sign in");
    setButtonTitle("Login");
    setButtonClick(this.customFunc.bind(this));

    this.onChange = this.onChange.bind(this);
  }

  onChange(id, value) {
    this.setState({ [id]: value });
  }

  customFunc() {
    console.log("User clicked on Login");

    // Make the Sign-in call here

    return true;
  }

  render() {
    return (
      <ContentContainer>
        <ContentForm onChange={this.onChange} />
        <ContentRedirect />
      </ContentContainer>
    );
  }
}

export default SignIn;
