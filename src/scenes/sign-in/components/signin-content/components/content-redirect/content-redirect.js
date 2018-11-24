import React from "react";
import RedirectContainer from "./components/redirect-container";
import Text from "../../../../../../components/text"
import Link from "../../../../../../components/link"

const ContentRedirect = () => (
  <RedirectContainer>
    <Text>New to Curb?</Text>
    <Link to={{path: "/sign-up", state: { isModal: true }}}>
      <Text>Sign up</Text>
    </Link>
  </RedirectContainer>
);

export default ContentRedirect;