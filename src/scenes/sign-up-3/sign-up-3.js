import React from "react";
import PopupWindow from "../../components/popup/components/popup-window";
import SignupContent from "./components/signup-content";

const SignUp3 = () => (
  <PopupWindow
    progress={{ progress: 3, total: 3 }}
    leftIcon="arrow-left"
    leftTo="/sign-up-2"
    button="Finish"
    buttonLink="/"
    content={SignupContent}
  />
);

export default SignUp3;
