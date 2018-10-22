import React from "react";
import LoginContainer from "./components/login-container";
import LoginInput from "./components/login-input";
import LoginRedirect from "./components/login-redirect";


const SigninContent = props => (
  <LoginContainer size={props.size}>
    <LoginInput placeholder='Username' />
    <LoginInput placeholder='Password' type='password' />
    <LoginRedirect />
  </LoginContainer>
  );

export default SigninContent;
