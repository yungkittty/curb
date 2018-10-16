import React from "react";
import ContentContainer from "./components/content-container";
import Text from "../../../../components/general/text";
import ContentInput from "./components/content-input";

const SignupContent = () => (
  <ContentContainer>
    <Text p h3 bold>
      Choose a username
    </Text>
    <ContentInput placeholder="Username" />
    <Text p h3 bold>
      Choose a password
    </Text>
    <ContentInput placeholder="Password" password />
    <Text p h3 bold>
      Confirm password
    </Text>
    <ContentInput placeholder="Password" password />
  </ContentContainer>
);

export default SignupContent;
