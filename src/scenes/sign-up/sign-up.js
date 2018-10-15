import React from "react";
import PopupWindow from "../../components/popup/components/popup-window";
import SignupContent from "./components/signup-content";

const SignUp = () => (
  <PopupWindow
    title="Sign up"
    button="Next"
    buttonLink="/sign-in"
    content={SignupContent}
  />
);

export default SignUp;
