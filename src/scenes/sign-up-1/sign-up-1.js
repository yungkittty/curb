import React from "react";
import PopupWindow from "../../components/popup/components/popup-window";
import SignupContent from "./components/signup-content";

const SignUp1 = () => (
  <PopupWindow
    progress={{ progress: 1, total: 3 }}
    rightTo="/"
    button="Next"
    buttonLink="/sign-up-2"
    content={SignupContent}
  />
);

export default SignUp1;
