import React from "react";
import ContentContainer from "./components/content-container";
import ContentText from "./components/content-text";
import Text from "../../../../components/general/text";

const SignupContent = () => (
  <ContentContainer>
    <ContentText hm>
      <Text va h1 center bold>
        Your account has been created!
      </Text>
    </ContentText>
  </ContentContainer>
);

export default SignupContent;
