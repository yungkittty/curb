import React from "react";
import SignUp1 from "./scenes/sign-up-1";
import SignUp2 from "./scenes/sign-up-2";
import SignUp3 from "./scenes/sign-up-3";

import MultiScenes from "../multi-scenes";

const step_one = {
  button: "Next",
  content: SignUp1
};

const step_two = {
  button: "Next",
  content: SignUp2
};

const step_three = {
  button: "Finish",
  buttonTo: "/",
  content: SignUp3
};

const scenes = [step_one, step_two, step_three];

const SignUp = () => <MultiScenes scenes={scenes} />;

export default SignUp;
