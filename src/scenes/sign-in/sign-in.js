import React from "react";
import PopupWindow from "../../components/popup/components/popup-window";
import SigninContent from "./components/signin-content";

const SignIn = () => (
  <PopupWindow
    title="Sign in"
    button="Login"
    buttonLink="/sign-up-1"
    content={SigninContent}
  />
);

export default SignIn;
