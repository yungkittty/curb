import React from "react";
import PopupWindow from "../../components/popup/components/popup-window";
import SignupContent from "./components/signup-content";

const SignUp2 = () => (
  <PopupWindow
    progress={{ progress: 2, total: 3 }}
    rightTo="/"
    leftIcon="arrow-left"
    leftTo="/sign-up-1"
    button="Next"
    buttonLink="/sign-up-3"
    content={SignupContent}
  />
);

export default SignUp2;
