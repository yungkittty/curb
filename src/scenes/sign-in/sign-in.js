import React from "react";
import PopupWindow from "../../components/popup/components/popup-window";
import LoginContent from "./components/login-content";

const SignIn = () => (
  <PopupWindow title="Sign in" button="Login" content={LoginContent} />
);

export default SignIn;
