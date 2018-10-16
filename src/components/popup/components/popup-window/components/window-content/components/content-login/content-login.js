import React from "react";
import LoginContainer from "./components/login-container";
import LoginInput from "./components/login-input";
import LoginRedirect from "./components/login-redirect";

const ContentLogin = props => (
  <LoginContainer size={props.size}>
    <LoginInput placeholder='Username'/>
    <LoginInput placeholder='Password' type='password'/>
  </LoginContainer>
);

export default ContentLogin;
