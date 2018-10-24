import React from "react";
import ContentContainer from "./components/content-container";
import Text from "../../../../components/general/text";
import ContentInput from "./components/content-input";

const Signup2 = ({ onChange }) => {
  return (
    <ContentContainer>
      <Text p h3 b>
        Choose a username
      </Text>
      <ContentInput id="username" placeholder="Username" onChange={onChange} />
      <Text p h3 b>
        Choose a password
      </Text>
      <ContentInput
        id="pass"
        placeholder="Password"
        onChange={onChange}
        password
      />
      <Text p h3 b>
        Confirm password
      </Text>
      <ContentInput
        id="passConfirm"
        placeholder="Password"
        onChange={onChange}
        password
      />
    </ContentContainer>
  );
};

export default Signup2;
