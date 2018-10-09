import React from "react";
import ContentContainer from "./components/content-container";
import ContentLogin from "./components/content-login";
import LoginRedirect from "./components/content-login/components/login-redirect";

const WindowContent = props => (
  <ContentContainer size={props.size}>
    <ContentLogin />
    <LoginRedirect />
  </ContentContainer>
);

export default WindowContent;
