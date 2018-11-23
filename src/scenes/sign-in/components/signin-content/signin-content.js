import React from "react";
import ContentContainer from "./components/content-container";
import ContentForm from "./components/content-form";
import ContentRedirect from "./components/content-redirect";

const SignInContent = () => ({
  buttonFunc() {
    console.log("User clicked on Login");

    // Make the Sign-in call here

    return true;
  },

  render() {
    return (
      <ContentContainer>
        <ContentForm />
        <ContentRedirect />
      </ContentContainer>
    );
  }
});

export default SignInContent;
