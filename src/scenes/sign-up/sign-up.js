import React from "react";
import MultiScenes from "../multi-scenes";
import SignUp1 from "./scenes/sign-up-1";
import SignUp2 from "./scenes/sign-up-2";
import SignUp3 from "./scenes/sign-up-3";

const step_one = {
  button: "Next",
  content: SignUp1
};

const step_two = {
  button: "Next",
  content: SignUp2,
  buttonFunc: data => {
    console.log("username is " + data.username);
    console.log("password is " + data.pass);
    console.log("password is " + data.passConfirm);

    return true; // Return true to go to next slide, otherwise return false
  }
};

const step_three = {
  button: "Finish",
  buttonTo: { pathname: "/" },
  content: SignUp3
};

const scenes = [step_one, step_two, step_three];

const SignUp = () => <MultiScenes scenes={scenes} />;

export default SignUp;
