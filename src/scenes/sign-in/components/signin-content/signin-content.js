import React from "react";
import SigninContainer from "./components/signin-container";
import SigninInput from "./components/signin-input";
import SigninLink from "./components/signin-link";

const SigninContent = () => (
  <SigninContainer>
    <SigninInput placeholder="Username" />
    <SigninInput placeholder="Password" type="password" />
    <SigninLink />
  </SigninContainer>
);

export default SigninContent;
