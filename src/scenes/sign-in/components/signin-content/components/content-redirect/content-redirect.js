import React from "react";
import RedirectContainer from "./components/link-container";
import Text from "../../../../../../components/text"
import Link from "../../../../../../components/link"

const SigninLink = () => (
  <RedirectContainer>
    <Text>New to Curb?</Text>
    <Link to={{path: "/sign-up", state: { isModal: true }}}>Sign up</Link>
  </RedirectContainer>
);

export default SigninLink;