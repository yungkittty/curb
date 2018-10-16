import React from "react";
import ContentContainer from "./components/content-container";
import ContentText from "./components/content-text";
import Text from "../../../../components/general/text";
import OneCheckbox from "./components/content-checkbox";

const SignupContent = () => (
  <ContentContainer>
    <ContentText>
      <Text h2 bold center>
        Important notes
      </Text>

      <Text p>
        You’ll never be able to recover your password, due to security reasons
        of the peer-to-peer architecture of Curb.
      </Text>
      <Text p>
        If you lose your password, your account will not be recoverable and even
        the Curb team will not be able to access it.
      </Text>
      <Text p>
        It’s also a security that nobody (even the Curb team) can access your
        private data, according to our vision.
      </Text>
      <Text p>
        So please be sure to remember your password or write it on a paper.
      </Text>
    </ContentText>

    <OneCheckbox id="agree" name="agree" label="I agree" />
  </ContentContainer>
);

export default SignupContent;
