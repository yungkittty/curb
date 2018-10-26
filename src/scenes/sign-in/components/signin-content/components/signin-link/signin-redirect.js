import React from "react";
import LinkContainer from "./components/link-container";
import Text from "../../../../../../components/general/text"
import Link from "../../../../../../components/link"

const SigninLink = () => (
  <LinkContainer>
    <Text>New to Curb?</Text>
    <Link to={{path: "/sign-up", state: { isModal: true }}}>Sign up</Link>
  </LinkContainer>
);

export default SigninLink;