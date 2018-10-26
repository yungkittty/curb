import React from "react";
import InputContainer from "./components/input-container";

const SigninInput = props => (
  <InputContainer placeholder={ props.placeholder } type={ props.type }/>
);

export default SigninInput;