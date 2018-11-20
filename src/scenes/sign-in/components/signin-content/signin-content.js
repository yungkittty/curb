import React from "react";
import SigninContainer from "./components/signin-container";
import SigninInput from "./components/signin-input";
import SigninLink from "./components/signin-link";

const SigninContent = () => ({
  buttonFunc() {
    console.log("User clicked on Login");

    // Make the Sign-in call here

    return true;
  },

  render() {
    return (
      <SigninContainer>
        <SigninInput placeholder="Username" />
        <SigninInput placeholder="Password" type="password" />
        <SigninLink />
      </SigninContainer>
    );
  }
});

export default SigninContent;
