import React from "react";
import PopupWindow from "../../components/popup/components/popup-window";
import SigninContent from "./components/signin-content";

const SignIn = () => (
  <PopupWindow
    title="Sign in"
    button="Login"
    buttonTo={{ pathname: "/" }}
    content={SigninContent}
  />
);

export default SignIn;
