import React, { Component } from "react";
import ContentContainer from "./components/content-container";
import ContentForm from "./components/content-form";
import ContentRedirect from "./components/content-redirect";

class SignIn extends Component {
  constructor(props) {
    super(props);
    const { setTitle, setButton, setButtonClick } = this.props;

    setTitle("Sign in");
    setButton("Login");
    setButtonClick(this.customFunc.bind(this));
  }

  customFunc() {
    console.log("User clicked on Login");

    // Make the Sign-in call here

    return true;
  }

  render() {
    return (
      <ContentContainer>
        <ContentForm />
        <ContentRedirect />
      </ContentContainer>
    );
  }
}

export default SignIn;
