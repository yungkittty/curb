import React from "react";
import Modal from "../../components/modal";
import SigninContent from "./components/signin-content";

const SignIn = () => (
  <Modal
    title="Sign in"
    customFunc={true}
    button="Login"
    buttonTo={{ pathname: "/" }}
    content={SigninContent}
  />
);

export default SignIn;
